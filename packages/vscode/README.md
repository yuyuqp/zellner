# Zellner Theme for Visual Studio Code

A faithful, modern port of Ron Aaron's classic [**`zellner`**](https://github.com/vim/colorschemes) light color scheme from Vim to Visual Studio Code.

Built atop a deterministic semantic theme engine modeled on VS Code's **2026 Light** design system, **Zellner** pairs classic, high-contrast Vim syntax highlighting with a clean, cohesive light workbench.

This core pack includes **Zellner** and **Zellner Dark**. Ten additional variants are available in [Zellner Theme Extended](../vscode-extended/README.md).

---

## 🎨 Color Palette & Syntax Highlights

Zellner uses high-contrast, recognizable colors that maximize readability on a pure white background:

* **Background**: Clean white (`#FFFFFF`) with subtle neutral borders (`#E5E5E5`)
* **Foreground**: Deep solid black (`#000000`)
* **Comments**: Classic bold red (`#FF0000`)
* **Keywords & Statements**: Sienna brown (`#A52A2A`)
* **Strings & Constants**: Magenta (`#FF00FF`)
* **Functions, Types & Identifiers**: Vibrant blue (`#0000FF`)
* **Tags & Markup**: Dark forest green (`#006400`)
* **Preprocessor & RegEx**: Purple (`#A020F0`)
* **Selection & Match**: Classic Vim visual yellow highlight (`#FFFF0080`)
* **Line Numbers**: Subtle statement-toned line numbering (`#A52A2A`)

---

## 🌘 Dark Spin

Zellner is a light theme first and foremost. The core pack includes a dark variant for those who want the same syntax character on a dark workbench:

* **Zellner Dark**: a near-black (`#121212`) background with the classic Zellner hues brightened for legibility (brown keywords, magenta strings/constants, blue functions, cyan entities, green tags).

---

## 🚀 Getting Started

### Activation

1. Open **Command Palette**: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type **Preferences: Color Theme** (`Ctrl+K Ctrl+T` or `Cmd+K Cmd+T`).
3. Select **Zellner** or **Zellner Dark**. Install [Zellner Theme Extended](../vscode-extended/README.md) for the other ten variants.

### Semantic Highlighting

Zellner fully supports VS Code semantic highlighting (`editor.semanticHighlighting.enabled: true`), ensuring modern language servers (TypeScript, Rust, Python, Go, C/C++, etc.) accurately reflect semantic tokens alongside standard TextMate grammars.

---

## 🛠️ Building & Contributing

This package is part of the [`zellner`](../../) monorepo.

To rebuild the theme JSON from the semantic definition in `schemes/zellner.scheme.json`:

```bash
# From workspace root:
pnpm build

# Or from packages/vscode:
pnpm run build
```

---

## 📄 Credits & License

* Original Vim colorscheme designed and authored by **Ron Aaron** (`ron@ronware.org`), maintained in the [Vim colorschemes repository](https://github.com/vim/colorschemes) under the [Vim License](https://vimhelp.org/uganda.txt.html#license).
* Workbench and syntax theme templates adapted from Visual Studio Code default themes ([`microsoft/vscode`](https://github.com/microsoft/vscode)), Copyright (c) Microsoft Corporation (MIT License).
* VS Code extension licensed under the [MIT License](LICENSE).
