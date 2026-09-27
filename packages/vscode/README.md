# Zellner Theme for Visual Studio Code

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/YueYu.vscode-theme-zellner?label=VS%20Code%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=YueYu.vscode-theme-zellner)
[![Open VSX](https://img.shields.io/open-vsx/v/YueYu/vscode-theme-zellner?label=Open%20VSX&logo=eclipse-ide)](https://open-vsx.org/extension/YueYu/vscode-theme-zellner)

A faithful, modern port of Ron Aaron's classic [**`zellner`**](https://github.com/vim/colorschemes) light color scheme from Vim to Visual Studio Code.

Built atop a deterministic semantic theme engine modeled on VS Code's **2026 Light** and **2026 Dark** design systems, **Zellner** pairs classic, high-contrast Vim syntax highlighting with a clean, cohesive workbench.

![Zellner & Zellner Dark Stacked Preview](https://raw.githubusercontent.com/yuyuqp/zellner/main/assets/hero-core.png)

This core pack includes **Zellner** (Light) and **Zellner Dark**. Ten additional variants (`Bright`, `Bright Blue`, `Bright Magenta`, `Soft`, and `Pastel`) are available in the companion [**Zellner Theme Extended**](https://marketplace.visualstudio.com/items?itemName=YueYu.vscode-theme-zellner-extended) extension ([Open VSX](https://open-vsx.org/extension/YueYu/vscode-theme-zellner-extended)).

---

## 🖼️ Theme Previews

### Zellner (Light)
Classic pure-white (`#FFFFFF`) editor canvas with bold red comments, sienna statements, magenta literals, vibrant blue identifiers, and Vim's unmistakable yellow (`#FFFF0080`) visual selection highlight.

![Zellner Light Screenshot](https://raw.githubusercontent.com/yuyuqp/zellner/main/assets/screenshots/zellner.png)

### Zellner Dark
A rich near-black (`#121212`) dark counterpart that preserves the exact syntactic character of Zellner with hues tuned for dark-mode legibility.

![Zellner Dark Screenshot](https://raw.githubusercontent.com/yuyuqp/zellner/main/assets/screenshots/zellner-dark.png)

---

## 🎨 Color Palette & Syntax Highlights

Zellner uses high-contrast, recognizable colors that maximize readability:

* **Background**: Clean white (`#FFFFFF`) on Light / near-black (`#121212`) on Dark
* **Foreground**: Deep solid black (`#000000`) on Light / crisp light gray (`#E6E6E6`) on Dark
* **Comments**: Classic bold red (`#FF0000` / `#FF5F5F`)
* **Keywords & Statements**: Sienna brown (`#A52A2A` / `#E08B6B`)
* **Strings & Constants**: Magenta (`#FF00FF` / `#FF66FF`)
* **Functions, Types & Identifiers**: Vibrant blue (`#0000FF` / `#5C9CFF`)
* **Tags & Markup**: Dark forest green (`#006400` / `#66CC66`)
* **Preprocessor & RegEx**: Purple (`#A020F0` / `#C678DD`)
* **Selection & Match**: Classic Vim visual yellow highlight (`#FFFF0080`)
* **Line Numbers**: Statement-toned line numbering (`#A52A2A`)

---

## 🚀 Getting Started

### Activation

1. Open **Command Palette**: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
2. Type **Preferences: Color Theme** (`Ctrl+K Ctrl+T` or `Cmd+K Cmd+T`).
3. Select **Zellner** or **Zellner Dark**.
4. Want more variants? Install [**Zellner Theme Extended**](https://marketplace.visualstudio.com/items?itemName=YueYu.vscode-theme-zellner-extended) for 10 additional `Bright`, `Soft`, and `Pastel` themes.

### Semantic Highlighting

Zellner fully supports VS Code semantic highlighting (`editor.semanticHighlighting.enabled: true`), ensuring modern language servers (TypeScript, Rust, Python, Go, C/C++, etc.) accurately reflect semantic tokens alongside standard TextMate grammars.

---

## 🛠️ Building & Contributing

This package is part of the [`yuyuqp/zellner`](https://github.com/yuyuqp/zellner) monorepo.

```bash
# From workspace root:
pnpm build
```

---

## 📄 Credits & License

* Authored and maintained by **Yue Yu** under the [MIT License](https://github.com/yuyuqp/zellner/blob/main/LICENSE).
* Original Vim colorscheme designed and authored by **Ron Aaron** (`ron@ronware.org`), maintained in the [Vim colorschemes repository](https://github.com/vim/colorschemes) under the [Vim License](https://vimhelp.org/uganda.txt.html#license).
* Workbench and syntax theme templates adapted from Visual Studio Code default themes ([`microsoft/vscode`](https://github.com/microsoft/vscode)), Copyright (c) Microsoft Corporation (MIT License).
