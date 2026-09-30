import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { expandTheme, expandThemeFile } from './expand-theme.js';

// VS Code 1.109 ignores quickInputList.focusHighlightForeground and uses
// list.focusHighlightForeground (falling back to list.highlightForeground).
// Keep both the legacy and current selected-match paths readable.
describe('Quick Open contrast across VS Code versions', () => {
  function luminance(hex) {
    assert.match(hex, /^#[0-9a-f]{6}$/i, 'Contrast checks require opaque RGB colors');
    return [1, 3, 5].map(offset => {
      const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    }).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
  }

  function assertReadable(foreground, background, context) {
    const a = luminance(foreground);
    const b = luminance(background);
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    assert.ok(ratio >= 4.5, `${context}: contrast ${ratio.toFixed(2)} must be at least 4.5:1`);
  }

  for (const pack of ['vscode', 'vscode-extended']) {
    const directory = path.resolve('packages', pack);
    const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'));
    for (const entry of pkg.contributes.themes) {
      it(`${entry.label} keeps selected filenames and matches readable`, () => {
        const theme = JSON.parse(fs.readFileSync(path.join(directory, entry.path), 'utf8'));
        const colors = theme.colors;
        const background = colors['quickInputList.focusBackground'];
        const legacyMatch = colors['list.focusHighlightForeground'] ?? colors['list.highlightForeground'];
        assertReadable(legacyMatch, background, 'VS Code 1.109 match');
        assertReadable(colors['quickInputList.focusHighlightForeground'], background, 'Current match');
        assertReadable(colors['quickInputList.focusForeground'], background, 'Selected filename');
        assertReadable(colors['list.highlightForeground'], colors['quickInput.background'], 'Unselected match');
        assert.notEqual(background, colors['quickInput.background'], 'Selected row must remain visible');
        const schemeFile = fs.readdirSync('schemes').find(file => {
          if (!file.startsWith('zellner') || !file.endsWith('.scheme.json')) return false;
          return JSON.parse(fs.readFileSync(path.join('schemes', file), 'utf8')).name === theme.name;
        });
        const scheme = JSON.parse(fs.readFileSync(path.join('schemes', schemeFile), 'utf8'));
        assert.deepStrictEqual(theme, expandTheme(scheme), 'Packaged theme must match its source scheme');
      });
    }
  }
});

const COMPILED_PATH = path.resolve('interim/2026-light.compiled.json');
const SCHEME_PATH = path.resolve('schemes/2026-light.scheme.json');
const EXPANDED_PATH = path.resolve('interim/2026-light.expanded.json');

describe('Theme Abstraction & Expansion System', () => {
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

  it('matches all 340 workbench UI colors and exact key ordering', () => {
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

  it('matches all 113 TextMate tokenColors rules (scopes, names, and settings)', () => {
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

  it('produces a 100% byte-for-byte identical JSON output to 2026-light.compiled.json', () => {
    assert.deepStrictEqual(expanded, targetTheme);
    const expandedRaw = fs.readFileSync(EXPANDED_PATH, 'utf8');
    assert.equal(expandedRaw, targetRaw);
  });

  it('reliably expands an ultra-minimal custom scheme using fallback derivations', () => {
    const minimalCustom = {
      name: 'Minimal Test Light',
      type: 'light',
      ui: {
        background: '#FFFFFF',
        foreground: '#000000'
      },
      accent: {
        primary: '#0000FF'
      },
      status: {
        error: '#FF0000',
        warning: '#A52A2A',
        success: '#5F875F'
      },
      syntax: {
        comment: '#FF0000',
        keyword: '#A020F0',
        constant: '#FF00FF',
        string: '#FF00FF',
        function: '#0000FF',
        tag: '#0000FF'
      }
    };

    const customExpanded = expandTheme(minimalCustom);
    assert.equal(customExpanded.name, 'Minimal Test Light');
    assert.equal(Object.keys(customExpanded.colors).length, 340);
    assert.equal(customExpanded.tokenColors.length, 113);
    assert.equal(Object.keys(customExpanded.semanticTokenColors).length, 4);
    assert.equal(customExpanded.colors['editor.background'], '#FFFFFF');
    assert.equal(customExpanded.colors['editor.foreground'], '#000000');
    assert.equal(customExpanded.colors['button.background'], '#0000FF');
  });

  it('correctly expands Zellner color scheme with semantic and UI overrides', () => {
    const zellnerSchemePath = path.resolve('schemes/zellner.scheme.json');
    const { expanded: zellnerTheme } = expandThemeFile(zellnerSchemePath);

    assert.equal(zellnerTheme.name, 'Zellner');
    assert.equal(zellnerTheme.type, 'light');
    assert.equal(zellnerTheme.semanticHighlighting, true);
    assert.equal(zellnerTheme.colors['editor.background'], '#FFFFFF');
    assert.equal(zellnerTheme.colors['editor.foreground'], '#000000');
    assert.equal(zellnerTheme.colors['editorLineNumber.foreground'], '#a52a2a');
    assert.equal(zellnerTheme.colors['editor.selectionBackground'], '#ffff0080');
    assert.equal(zellnerTheme.semanticTokenColors['newOperator'], '#a020f0');
    assert.equal(zellnerTheme.semanticTokenColors['stringLiteral'], '#ff00ff');
  });

  it('verifies the core and extended VS Code theme packs', () => {
    const expectedPacks = [
      {
        directory: 'packages/vscode',
        packageName: 'vscode-theme-zellner',
        themeNames: ['Zellner', 'Zellner Dark']
      },
      {
        directory: 'packages/vscode-extended',
        packageName: 'vscode-theme-zellner-extended',
        themeNames: [
          'Zellner Bright',
          'Zellner Bright Dark',
          'Zellner Bright Blue',
          'Zellner Bright Magenta',
          'Zellner Bright Blue Dark',
          'Zellner Bright Magenta Dark',
          'Zellner Soft',
          'Zellner Soft Dark',
          'Zellner Pastel',
          'Zellner Pastel Dark'
        ]
      }
    ];

    const expectedThemes = [
      { name: 'Zellner', uiTheme: 'vs', type: 'light' },
      { name: 'Zellner Bright', uiTheme: 'vs', type: 'light', tabBorder: '#FF00FF', sideBarBackground: '#FFFFFF' },
      { name: 'Zellner Dark', uiTheme: 'vs-dark', type: 'dark' },
      { name: 'Zellner Bright Dark', uiTheme: 'vs-dark', type: 'dark', tabBorder: '#FF66FF', sideBarBackground: '#000000' },
      { name: 'Zellner Bright Blue', uiTheme: 'vs', type: 'light', tabBorder: '#0000FF', sideBarBackground: '#FFFFFF' },
      { name: 'Zellner Bright Magenta', uiTheme: 'vs', type: 'light', tabBorder: '#FF00FF', sideBarBackground: '#FFFFFF' },
      { name: 'Zellner Bright Blue Dark', uiTheme: 'vs-dark', type: 'dark', tabBorder: '#61AFEF', sideBarBackground: '#000000' },
      { name: 'Zellner Bright Magenta Dark', uiTheme: 'vs-dark', type: 'dark', tabBorder: '#FF66FF', sideBarBackground: '#000000' },
      { name: 'Zellner Soft', uiTheme: 'vs', type: 'light' },
      { name: 'Zellner Soft Dark', uiTheme: 'vs-dark', type: 'dark' },
      { name: 'Zellner Pastel', uiTheme: 'vs', type: 'light' },
      { name: 'Zellner Pastel Dark', uiTheme: 'vs-dark', type: 'dark' }
    ];

    for (const { directory, packageName, themeNames } of expectedPacks) {
      const pkgPath = path.resolve(directory, 'package.json');
      assert.ok(fs.existsSync(pkgPath), `${directory}/package.json should exist`);

      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      assert.equal(pkg.name, packageName);
      assert.equal(pkg.contributes?.themes?.length, themeNames.length);
      assert.deepStrictEqual(pkg.contributes.themes.map((theme) => theme.label), themeNames);

      for (const themeEntry of pkg.contributes.themes) {
        const { name: expectedName, uiTheme, type, tabBorder, sideBarBackground } = expectedThemes.find(
          ({ name }) => name === themeEntry.label
        );
        assert.equal(themeEntry.uiTheme, uiTheme);

        const themeFilePath = path.resolve(directory, themeEntry.path);
        assert.ok(fs.existsSync(themeFilePath), `Theme file ${themeFilePath} should exist`);

        const themeContent = JSON.parse(fs.readFileSync(themeFilePath, 'utf8'));
        assert.equal(themeContent.name, expectedName);
        assert.equal(themeContent.type, type);
        const expectedColorCount = type === 'dark' ? 326 : 340;
        assert.equal(Object.keys(themeContent.colors).length, expectedColorCount);

        if (sideBarBackground) {
          assert.equal(themeContent.colors['sideBar.background'], sideBarBackground);
          assert.equal(themeContent.colors['panel.background'], sideBarBackground);
          assert.equal(themeContent.colors['tab.selectedBackground'], sideBarBackground);
          assert.equal(themeContent.colors['tab.selectedBorderTop'], tabBorder);
        }
      }
    }
  });
});

