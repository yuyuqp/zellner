import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { expandTheme, expandThemeFile } from './expand-theme.js';

const COMPILED_PATH = path.resolve('interim/2026-dark.compiled.json');
const SCHEME_PATH = path.resolve('schemes/2026-dark.scheme.json');
const EXPANDED_PATH = path.resolve('interim/2026-dark.expanded.json');

describe('Dark Theme Abstraction & Expansion System (2026 Dark)', () => {
  const targetRaw = fs.readFileSync(COMPILED_PATH, 'utf8');
  const targetTheme = JSON.parse(targetRaw);
  const { expanded } = expandThemeFile(SCHEME_PATH, EXPANDED_PATH);

  it('matches top-level metadata ($schema, name, type, semanticHighlighting)', () => {
    assert.equal(expanded.$schema, targetTheme.$schema);
    assert.equal(expanded.name, targetTheme.name);
    assert.equal(expanded.type, targetTheme.type);
    assert.equal(expanded.semanticHighlighting, targetTheme.semanticHighlighting);
    assert.deepStrictEqual(Object.keys(expanded), Object.keys(targetTheme));
  });

  it('matches all 326 workbench UI colors and exact key ordering', () => {
    const expandedKeys = Object.keys(expanded.colors);
    const targetKeys = Object.keys(targetTheme.colors);

    assert.equal(expandedKeys.length, targetKeys.length, 'Workbench color count mismatch');
    assert.deepStrictEqual(expandedKeys, targetKeys, 'Workbench color key order mismatch');

    for (const key of targetKeys) {
      assert.equal(
        expanded.colors[key],
        targetTheme.colors[key],
        `Mismatch for workbench color "${key}": expected ${targetTheme.colors[key]}, got ${expanded.colors[key]}`
      );
    }
  });

  it('matches all 118 TextMate tokenColors rules (scopes, names, and settings)', () => {
    assert.equal(
      expanded.tokenColors.length,
      targetTheme.tokenColors.length,
      'tokenColors rule count mismatch'
    );

    for (let i = 0; i < targetTheme.tokenColors.length; i++) {
      assert.deepStrictEqual(
        expanded.tokenColors[i],
        targetTheme.tokenColors[i],
        `Mismatch at tokenColors[${i}]`
      );
    }
  });

  it('matches all semanticTokenColors rules', () => {
    assert.deepStrictEqual(expanded.semanticTokenColors, targetTheme.semanticTokenColors);
  });

  it('produces a 100% byte-for-byte identical JSON output to 2026-dark.compiled.json', () => {
    assert.deepStrictEqual(expanded, targetTheme);
    const expandedRaw = fs.readFileSync(EXPANDED_PATH, 'utf8');
    assert.equal(expandedRaw, targetRaw);
  });

  it('reliably expands an ultra-minimal custom dark scheme using fallback derivations', () => {
    const minimalCustomDark = {
      name: 'Minimal Test Dark',
      type: 'dark',
      ui: {
        background: '#121314',
        foreground: '#BFBFBF'
      },
      accent: {
        primary: '#3994BC'
      },
      status: {
        error: '#F48771',
        warning: '#E5BA7D',
        success: '#73C991'
      },
      syntax: {
        comment: '#8B949E',
        keyword: '#FF7B72',
        constant: '#79C0FF',
        string: '#A5D6FF',
        function: '#D2A8FF',
        tag: '#7EE787'
      }
    };

    const customExpanded = expandTheme(minimalCustomDark);
    assert.equal(customExpanded.name, 'Minimal Test Dark');
    assert.equal(customExpanded.type, 'dark');
    assert.equal(Object.keys(customExpanded.colors).length, 326);
    assert.equal(customExpanded.tokenColors.length, 118);
    assert.equal(Object.keys(customExpanded.semanticTokenColors).length, 4);
    assert.equal(customExpanded.colors['editor.background'], '#121314');
    assert.equal(customExpanded.colors['foreground'], '#BFBFBF');
  });

  it('correctly expands Zellner Dark color scheme with semantic and UI overrides', () => {
    const zellnerDarkSchemePath = path.resolve('schemes/zellner.dark.scheme.json');
    const { expanded: zellnerDarkTheme } = expandThemeFile(zellnerDarkSchemePath);

    assert.equal(zellnerDarkTheme.name, 'Zellner Dark');
    assert.equal(zellnerDarkTheme.type, 'dark');
    assert.equal(zellnerDarkTheme.semanticHighlighting, true);
    assert.equal(zellnerDarkTheme.colors['editor.background'], '#121212');
    assert.equal(zellnerDarkTheme.colors['editor.foreground'], '#FFFFFF');
    assert.equal(zellnerDarkTheme.colors['foreground'], '#FFFFFF');
    assert.equal(zellnerDarkTheme.colors['editorLineNumber.foreground'], '#d2691e');
    assert.equal(zellnerDarkTheme.colors['editor.selectionBackground'], '#ffff0080');
    assert.equal(zellnerDarkTheme.colors['diffEditor.insertedLineBackground'], '#98c3791f');
    assert.equal(zellnerDarkTheme.colors['diffEditor.removedLineBackground'], '#ff6b6b1f');
    assert.equal(zellnerDarkTheme.semanticTokenColors['newOperator'], '#c77dff');
    assert.equal(zellnerDarkTheme.semanticTokenColors['stringLiteral'], '#ff66ff');
  });

  it('aligns all 5 Zellner dark schemes cleanly with the 326-key dark template', () => {
    const darkSchemes = [
      'schemes/zellner.dark.scheme.json',
      'schemes/zellner-bright.dark.scheme.json',
      'schemes/zellner-bright-magenta.dark.scheme.json',
      'schemes/zellner-soft.dark.scheme.json',
      'schemes/zellner-pastel.dark.scheme.json'
    ];

    for (const schemeFile of darkSchemes) {
      const { expanded: theme, scheme } = expandThemeFile(schemeFile);
      assert.equal(theme.type, 'dark');
      assert.equal(Object.keys(theme.colors).length, 326, `${scheme.name} should have 326 workbench colors`);
      assert.equal(theme.tokenColors.length, 118, `${scheme.name} should have 118 tokenColors rules`);
      assert.equal(theme.colors['editor.foreground'], scheme.ui.foreground);
    }
  });
});
