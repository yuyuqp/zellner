# 2026 Light vs. 2026 Dark Theme Template Findings

## Overview

When attempting to expand [`schemes/2026-dark.scheme.json`](../schemes/2026-dark.scheme.json) using the original light template ([`scripts/theme-template.js`](../scripts/theme-template.js)), the generated output did not match [`interim/2026-dark.compiled.json`](../interim/2026-dark.compiled.json).

Analysis of the upstream compilation chains (`light_vs.json` $\to$ `light_plus.json` $\to$ `light_modern.json` $\to$ `2026-light.json` vs. `dark_vs.json` $\to$ `dark_plus.json` $\to$ `dark_modern.json` $\to$ `2026-dark.json`) identified four root causes requiring a dedicated dark template ([`scripts/theme-template-dark.js`](../scripts/theme-template-dark.js)), scheme palette adjustments in [`schemes/2026-dark.scheme.json`](../schemes/2026-dark.scheme.json), and dark-mode expression evaluation in [`scripts/expand-theme.js`](../scripts/expand-theme.js).

---

## 1. Workbench UI Color Keys & Ordering (`colors`)

* **2026 Light** (`interim/2026-light.compiled.json`): **340** workbench color keys.
* **2026 Dark** (`interim/2026-dark.compiled.json`): **326** workbench color keys.

### Keys Exclusive to 2026 Dark (9 keys)
1. `agentsCard.border`
2. `debugToolBar.background`
3. `welcomePage.progress.foreground`
4. `editorStickyScroll.background`
5. `diffEditor.insertedLineBackground`
6. `diffEditor.removedLineBackground`
7. `terminal.background`
8. `terminal.border`
9. `agentsBottomPanel.border`

### Keys Exclusive to 2026 Light (23 keys)
`searchEditor.textInputBorder`, `settings.textInputBorder`, `settings.numberInputBorder`, `notebook.cellBorderColor`, `notebook.selectedCellBackground`, `statusBarItem.errorBackground`, `list.focusAndSelectionOutline`, `diffEditor.unchangedRegionBackground`, `modernActivityBarItem.activeForeground`, `modernActivityBarItem.hoverForeground`, `statusBarItem.compactHoverBackground`, `widget.shadow`, `editorStickyScroll.shadow`, `sideBarStickyScroll.shadow`, `panelStickyScroll.shadow`, `listFilterWidget.shadow`, `editorSuggestWidget.selectedForeground`, `editorSuggestWidget.selectedIconForeground`, `toolbar.hoverBackground`, `problemsWarningIcon.foreground`, `statusBarItem.prominentHoverForeground`, `chat.thinkingShimmer`, `agentStatusIndicator.background`.

---

## 2. Semantic Token Mappings Across Shared Workbench Keys

Out of the **317** workbench keys shared between `2026-light.compiled.json` and `2026-dark.compiled.json`, **186** map to different tokens, alpha opacities, or derived shades:

| Workbench Key | 2026 Light Expression | 2026 Dark Expression | Rationale |
| :--- | :--- | :--- | :--- |
| `button.background` | `$accent.primary` | `$accent.secondary` | Dark theme buttons use `#297AA0` (`$accent.secondary`) instead of `#3994BC` (`$accent.primary`). |
| `focusBorder` | `$accent.primary` | `$accent.primary/B3` | Dark theme applies `B3` alpha (`#3994BCB3`) to focus outlines. |
| `menu.background` | `$ui.surface` | `$ui.surfaceElevated` | Dark menus float on `#202122` (`$ui.surfaceElevated`) above `#191A1B` (`$ui.surface`). |
| `editor.foreground` | `$ui.foreground` | `derive($ui.surface,#BBBEBF)` | Dark editor text is `#BBBEBF` while general workbench `foreground` is `#bfbfbf`. |
| `editor.selectionBackground` | `$accent.primary/40` | `derive($accent.primary,#276782)/dd` | Dark selection uses a shaded teal-blue (`#276782dd`) derived from `$accent.primary`. |
| `list.activeSelectionIconForeground` | `$ui.contrast` | `$ui.contrast:short` | Inherited from `dark_modern.json` as 3-digit shorthand `#FFF`. |

---

## 3. TextMate Scope Rules (`tokenColors`)

* **2026 Light** (`interim/2026-light.compiled.json`): **113** rules (`49` `light_vs` + `15` `light_plus` + `49` `2026-light`).
* **2026 Dark** (`interim/2026-dark.compiled.json`): **118** rules (`50` `dark_vs` + `15` `dark_plus` + `53` `2026-dark`).

Key differences in `tokenColors`:
1. **`dark_vs.json` vs. `light_vs.json`**: `dark_vs.json` defines 50 base rules (vs. 49 in `light_vs.json`), including distinct rules for `header` (`#000080`), `entity.name.tag.css` (`#d7ba7d`), `string.tag` (`#ce9178`), and `string.value` (`#ce9178`), which shifts rule indices starting at index 3.
2. **Diagnostic Token Rules in `2026-dark.json`**: `2026-dark.json` appends 4 rules at indices 114–117 (`token.info-token`, `token.warn-token`, `token.error-token`, `token.debug-token`) that are not present in `2026-light.json`.

---

## 4. Multi-Layer Syntax Palette & Dark-Mode Color Interpolation

### Multi-Layer Syntax Palette in `schemes/2026-dark.scheme.json`
In `2026-dark.compiled.json`, TextMate rules 0–49 originate from `dark_vs.json` (`syntax.base`), rules 50–64 and `semanticTokenColors` originate from `dark_plus.json` (`syntax.plus`), and rules 65–113 originate from `2026-dark.json` (`syntax.primary`):
* **`syntax.primary` (`2026-dark.json`)**: `entity` updated from `#79c0ff` to `#ffa657` (used by `entity.name`, `variable`, `markup.changed`), and `carriageReturnBg` updated from `#121314` to `#f0f6fc` (used by `carriage-return` foreground).
* **`syntax.plus` (`dark_plus.json`)**: Updated to `function: "#DCDCAA"`, `type: "#4EC9B0"`, `controlKeyword: "#C586C0"`, `variable: "#9CDCFE"`, `constant: "#4FC1FF"`, `regexpGroup: "#CE9178"`, `regexpEscape: "#d7ba7d"`.
* **`syntax.base` (`dark_vs.json`)**: Updated to `comment: "#6A9955"`, `keyword: "#569cd6"`, `number: "#b5cea8"`, `string: "#ce9178"`, `regexp: "#d16969"`, `tag: "#d7ba7d"`, `attribute: "#9cdcfe"`, `property: "#9cdcfe"`, `header: "#000080"`, `italic: "#C586C0"`, `invalid: "#f44747"`.

### Dark-Mode `gray(XX)` and `derive($anchor,#RRGGBB)` Math
In `2026-light`, `$ui.background = #FFFFFF` (`[255, 255, 255]`) and `$ui.contrast = #000000` (`[0, 0, 0]`), so linear interpolation over `[0, 255]` acted as an exact identity transform on reference colors.

In `2026-dark`, `$ui.background = #121314` (`[18, 19, 20]`) and `$ui.contrast = #FFFFFF` (`[255, 255, 255]`). Because `refBg` has non-zero, slightly cool-tinted RGB channels (`18, 19, 20`), [`evaluateColorExpression`](../scripts/expand-theme.js) computes per-channel interpolation relative to `refBg` (`#121314`) and `refFg` (`#FFFFFF`):
* For `t >= c0`, channels interpolate from `curAnchor` (`c`) toward `fg` (`$ui.contrast`) using ratio `(t - c0) / (refFg[i] - c0)`.
* For `refBg[i] <= t < c0`, channels interpolate from `curAnchor` (`c`) toward `bg` (`$ui.background`) using ratio `(c0 - t) / (c0 - refBg[i])`.
* For `t < refBg[i]`, channels scale proportionally toward `#000000`.

This guarantees that `2026-dark.scheme.json` expands into a **100% byte-for-byte identical** JSON match to `interim/2026-dark.compiled.json` while smoothly scaling any custom dark scheme relative to its own `$ui.background` and `$ui.contrast`.
