import fs from 'node:fs';
import path from 'node:path';
import { parse, printParseErrorCode } from 'jsonc-parser';
import * as LIGHT_TEMPLATE from './theme-template.js';
import * as DARK_TEMPLATE from './theme-template-dark.js';

/**
 * Parses a 6-digit hex color string (#RRGGBB) into an [R, G, B] byte array.
 *
 * @param {string} hex
 * @returns {[number, number, number]}
 */
function parseRgb(hex) {
  const clean = hex.startsWith('#') ? hex.slice(1, 7) : hex.slice(0, 6);
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16)
  ];
}

/**
 * Formats an [R, G, B] array into an uppercase 6-digit hex string (#RRGGBB).
 *
 * @param {number[]} rgb
 * @returns {string}
 */
function toHex(rgb) {
  return (
    '#' +
    rgb
      .map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0').toUpperCase())
      .join('')
  );
}

/**
 * Linearly mixes two hex colors by ratio w in [0, 1].
 *
 * @param {string} hexA
 * @param {string} hexB
 * @param {number} w
 * @returns {string}
 */
function mixHex(hexA, hexB, w) {
  const a = parseRgb(hexA);
  const b = parseRgb(hexB);
  return toHex([
    a[0] + w * (b[0] - a[0]),
    a[1] + w * (b[1] - a[1]),
    a[2] + w * (b[2] - a[2])
  ]);
}

/**
 * Normalizes a minimal color scheme object by filling in smart derived fallbacks
 * whenever secondary UI, status, chart, or multi-layer syntax tokens are omitted.
 *
 * @param {any} raw
 * @returns {any}
 */
export function normalizeScheme(raw) {
  const isDark = raw.type === 'dark';
  const bg = raw.ui?.background ?? (isDark ? '#1E1E1E' : '#FFFFFF');
  const fg = raw.ui?.foreground ?? (isDark ? '#D4D4D4' : '#202020');
  const contrast = raw.ui?.contrast ?? (isDark ? '#FFFFFF' : '#000000');

  const ui = {
    background: bg,
    foreground: fg,
    foregroundMuted: raw.ui?.foregroundMuted ?? mixHex(fg, bg, 0.28),
    foregroundSubtle: raw.ui?.foregroundSubtle ?? mixHex(fg, bg, 0.54),
    foregroundDisabled: raw.ui?.foregroundDisabled ?? mixHex(fg, bg, 0.69),
    contrast,
    surface: raw.ui?.surface ?? mixHex(bg, contrast, 0.02),
    surfaceElevated: raw.ui?.surfaceElevated ?? mixHex(bg, contrast, 0.08),
    borderSubtle: raw.ui?.borderSubtle ?? mixHex(bg, contrast, 0.06),
    borderDefault: raw.ui?.borderDefault ?? mixHex(bg, contrast, 0.10),
    borderControl: raw.ui?.borderControl ?? mixHex(bg, contrast, 0.15)
  };

  const accentPrimary = raw.accent?.primary ?? '#0069CC';
  const accent = {
    primary: accentPrimary,
    secondary: raw.accent?.secondary ?? mixHex(accentPrimary, contrast, 0.08)
  };

  const statusError = raw.status?.error ?? '#ad0707';
  const statusWarning = raw.status?.warning ?? '#667309';
  const statusSuccess = raw.status?.success ?? '#587c0c';
  const status = {
    error: statusError,
    warning: statusWarning,
    warningIcon: raw.status?.warningIcon ?? statusWarning,
    success: statusSuccess,
    charts: {
      blue: raw.status?.charts?.blue ?? accentPrimary,
      green: raw.status?.charts?.green ?? statusSuccess,
      purple: raw.status?.charts?.purple ?? (raw.syntax?.primary?.function ?? '#652D90'),
      orange: raw.status?.charts?.orange ?? statusWarning
    }
  };

  const synPrimary = raw.syntax?.primary ?? raw.syntax ?? {};
  const primary = {
    foreground: synPrimary.foreground ?? fg,
    comment: synPrimary.comment ?? ui.foregroundMuted,
    keyword: synPrimary.keyword ?? '#cf222e',
    constant: synPrimary.constant ?? accentPrimary,
    string: synPrimary.string ?? '#0a3069',
    function: synPrimary.function ?? '#8250df',
    entity: synPrimary.entity ?? '#953800',
    tag: synPrimary.tag ?? statusSuccess,
    invalid: synPrimary.invalid ?? statusError,
    bracket: synPrimary.bracket ?? ui.foregroundMuted,
    carriageReturnBg: synPrimary.carriageReturnBg ?? ui.surface,
    ignoredBg: synPrimary.ignoredBg ?? ui.surfaceElevated
  };

  const synPlus = raw.syntax?.plus ?? {};
  const plus = {
    function: synPlus.function ?? primary.function,
    type: synPlus.type ?? primary.entity,
    controlKeyword: synPlus.controlKeyword ?? primary.keyword,
    variable: synPlus.variable ?? primary.foreground,
    constant: synPlus.constant ?? primary.constant,
    regexpGroup: synPlus.regexpGroup ?? primary.string,
    regexpEscape: synPlus.regexpEscape ?? primary.keyword
  };

  const synBase = raw.syntax?.base ?? {};
  const base = {
    comment: synBase.comment ?? primary.comment,
    keyword: synBase.keyword ?? primary.keyword,
    number: synBase.number ?? primary.constant,
    string: synBase.string ?? primary.string,
    regexp: synBase.regexp ?? primary.string,
    tag: synBase.tag ?? primary.tag,
    attribute: synBase.attribute ?? primary.entity,
    property: synBase.property ?? primary.constant,
    header: synBase.header ?? primary.constant,
    italic: synBase.italic ?? primary.function,
    invalid: synBase.invalid ?? primary.invalid
  };

  return {
    $schema: raw.$schema ?? 'vscode://schemas/color-theme',
    name: raw.name ?? 'Custom Light',
    type: raw.type ?? 'light',
    semanticHighlighting: raw.semanticHighlighting ?? true,
    ui,
    accent,
    status,
    syntax: { primary, plus, base },
    overrides: raw.overrides ?? {}
  };
}

/**
 * Resolves a dot-separated token path (e.g. "$ui.foreground") from a normalized scheme.
 *
 * @param {any} scheme
 * @param {string} tokenPath
 * @returns {string}
 */
function getTokenByPath(scheme, tokenPath) {
  const parts = tokenPath.slice(1).split('.');
  let current = scheme;
  for (const part of parts) {
    current = current?.[part];
  }
  if (typeof current !== 'string') {
    throw new Error(`Unresolved theme token path: ${tokenPath}`);
  }
  return current;
}

/**
 * Evaluates a semantic color expression against the normalized scheme.
 *
 * Supported expressions:
 *   - `$path.to.token`            Direct token lookup
 *   - `gray(XX)`                  Linear interpolation between `$ui.contrast` and `$ui.background`
 *   - `derive($anchor,#RRGGBB)`   Proportional tint/shade interpolation relative to anchor
 *   - `:lower` / `:upper`         Hex casing modifier
 *   - `/AA`                       Hex alpha suffix
 *
 * @param {string} expr
 * @param {any} scheme
 * @returns {string}
 */
export function evaluateColorExpression(expr, scheme) {
  let rest = expr;
  let alpha = '';
  const slashIdx = rest.indexOf('/');
  if (slashIdx !== -1) {
    alpha = rest.slice(slashIdx + 1);
    rest = rest.slice(0, slashIdx);
  }

  let shortHex = false;
  if (rest.endsWith(':short')) {
    shortHex = true;
    rest = rest.slice(0, -6);
  }

  let casing = null;
  if (rest.endsWith(':lower')) {
    casing = 'lower';
    rest = rest.slice(0, -6);
  } else if (rest.endsWith(':upper')) {
    casing = 'upper';
    rest = rest.slice(0, -6);
  }

  const isDark = scheme.type === 'dark';
  const refAnchors = isDark ? DARK_TEMPLATE.REFERENCE_ANCHORS : LIGHT_TEMPLATE.REFERENCE_ANCHORS;
  const bg = parseRgb(scheme.ui.background);
  const fg = parseRgb(scheme.ui.contrast);
  let hex6;

  if (rest.startsWith('gray(')) {
    const step = parseInt(rest.slice(5, -1), 16);
    if (isDark) {
      const refBg = parseRgb(refAnchors['$ui.background'] ?? '#121314');
      const refFg = parseRgb(refAnchors['$ui.contrast'] ?? '#FFFFFF');
      hex6 = toHex(
        [0, 1, 2].map(i => {
          if (step >= refBg[i]) {
            const w = refFg[i] === refBg[i] ? 0 : (step - refBg[i]) / (refFg[i] - refBg[i]);
            return bg[i] + w * (fg[i] - bg[i]);
          } else {
            const w = refBg[i] === 0 ? 0 : (refBg[i] - step) / refBg[i];
            return bg[i] * (1 - w);
          }
        })
      );
    } else {
      const w = step / 255;
      hex6 = toHex([
        fg[0] + w * (bg[0] - fg[0]),
        fg[1] + w * (bg[1] - fg[1]),
        fg[2] + w * (bg[2] - fg[2])
      ]);
    }
  } else if (rest.startsWith('derive(')) {
    const [anchorPath, targetHex] = rest.slice(7, -1).split(',');
    const curAnchor = parseRgb(getTokenByPath(scheme, anchorPath));
    const refAnchor = parseRgb(refAnchors[anchorPath]);
    const target = parseRgb(targetHex);
    const out = [0, 1, 2].map(i => {
      const c0 = refAnchor[i];
      const t = target[i];
      const c = curAnchor[i];
      if (isDark) {
        const refBg = parseRgb(refAnchors['$ui.background'] ?? '#121314');
        const refFg = parseRgb(refAnchors['$ui.contrast'] ?? '#FFFFFF');
        if (t >= c0) {
          const w = refFg[i] === c0 ? 0 : (t - c0) / (refFg[i] - c0);
          return c + w * (fg[i] - c);
        } else if (t >= refBg[i] && c0 > refBg[i]) {
          const w = (c0 - t) / (c0 - refBg[i]);
          return c - w * (c - bg[i]);
        } else {
          const w = c0 === 0 ? 0 : (c0 - t) / c0;
          return c * (1 - w);
        }
      } else {
        if (t >= c0) {
          const w = c0 === 255 ? 0 : (t - c0) / (255 - c0);
          return c + w * (bg[i] - c);
        } else {
          const w = c0 === 0 ? 0 : (c0 - t) / c0;
          return c - w * (c - fg[i]);
        }
      }
    });
    hex6 = toHex(out);
  } else if (rest.startsWith('$')) {
    hex6 = getTokenByPath(scheme, rest);
  } else {
    hex6 = rest;
  }

  if (shortHex && hex6.length === 7) {
    hex6 = '#' + hex6[1] + hex6[3] + hex6[5];
  }
  if (casing === 'lower') hex6 = hex6.toLowerCase();
  if (casing === 'upper') hex6 = hex6.toUpperCase();
  return hex6 + alpha;
}

/**
 * Expands a minimal color scheme object into a complete VS Code color theme object.
 *
 * @param {any} rawScheme
 * @returns {any}
 */
export function expandTheme(rawScheme) {
  const scheme = normalizeScheme(rawScheme);
  const template = scheme.type === 'dark' ? DARK_TEMPLATE : LIGHT_TEMPLATE;

  const colors = {};
  for (const [key, expr] of Object.entries(template.WORKBENCH_COLOR_TEMPLATE)) {
    colors[key] = evaluateColorExpression(expr, scheme);
  }
  if (scheme.overrides?.colors) {
    Object.assign(colors, scheme.overrides.colors);
  }

  const tokenColors = template.TOKEN_COLOR_TEMPLATE.map(rule => {
    const outRule = {};
    for (const key of Object.keys(rule)) {
      if (key === 'settings') {
        const outSettings = {};
        for (const [sKey, sVal] of Object.entries(rule.settings)) {
          outSettings[sKey] =
            sKey === 'foreground' || sKey === 'background'
              ? evaluateColorExpression(sVal, scheme)
              : sVal;
        }
        outRule.settings = outSettings;
      } else {
        outRule[key] = structuredClone(rule[key]);
      }
    }
    return outRule;
  });

  const semanticTokenColors = {};
  for (const [key, expr] of Object.entries(template.SEMANTIC_TOKEN_COLOR_TEMPLATE)) {
    semanticTokenColors[key] = evaluateColorExpression(expr, scheme);
  }
  if (scheme.overrides?.semanticTokenColors) {
    Object.assign(semanticTokenColors, scheme.overrides.semanticTokenColors);
  }

  return {
    $schema: scheme.$schema,
    name: scheme.name,
    type: scheme.type,
    colors,
    tokenColors,
    semanticTokenColors,
    semanticHighlighting: scheme.semanticHighlighting
  };
}

/**
 * Loads a minimal color scheme JSON/JSONC file and expands it to an output theme file.
 *
 * @param {string} schemePath
 * @param {string} [outputPath]
 * @returns {{ expanded: any, scheme: any }}
 */
export function expandThemeFile(schemePath, outputPath) {
  const absInput = path.resolve(schemePath);
  const content = fs.readFileSync(absInput, 'utf8');
  const errors = [];
  const rawScheme = parse(content, errors, { allowTrailingComma: true });
  if (errors.length > 0) {
    const details = errors.map(e => `${printParseErrorCode(e.error)} at ${e.offset}`).join(', ');
    throw new Error(`Failed to parse scheme file ${absInput}: ${details}`);
  }

  const expanded = expandTheme(rawScheme);

  if (outputPath) {
    const absOutput = path.resolve(outputPath);
    fs.mkdirSync(path.dirname(absOutput), { recursive: true });
    fs.writeFileSync(absOutput, JSON.stringify(expanded, null, 2), 'utf8');
  }

  return { expanded, scheme: rawScheme };
}

// CLI entry point
const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));

if (isMain || process.argv[1]?.endsWith('expand-theme.js')) {
  const args = process.argv.slice(2);
  const inputArg = args[0] || 'schemes/2026-light.scheme.json';
  const outputArg = args[1] || 'interim/2026-light.expanded.json';

  console.log(`\nExpanding minimal color scheme: ${inputArg}`);
  const { expanded } = expandThemeFile(inputArg, outputArg);

  console.log('Expansion summary:');
  console.log(`  - Theme Name: ${expanded.name}`);
  console.log(`  - Theme Type: ${expanded.type}`);
  console.log(`  - Workbench Colors: ${Object.keys(expanded.colors).length}`);
  console.log(`  - Token Color Rules: ${expanded.tokenColors.length}`);
  console.log(`  - Semantic Token Rules: ${Object.keys(expanded.semanticTokenColors).length}`);
  console.log(`\nSuccessfully wrote expanded theme to:\n  ${path.resolve(outputArg)}\n`);
}
