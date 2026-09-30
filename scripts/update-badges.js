import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Read current version from root package.json
const pkgPath = path.join(rootDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

console.log(`Updating README badges to version v${version}...`);

const readmeFiles = [
  {
    path: path.join(rootDir, 'README.md'),
    packageKey: 'vscode-theme-zellner',
  },
  {
    path: path.join(rootDir, 'packages', 'vscode', 'README.md'),
    packageKey: 'vscode-theme-zellner',
  },
  {
    path: path.join(rootDir, 'packages', 'vscode-extended', 'README.md'),
    packageKey: 'vscode-theme-zellner-extended',
  },
];

for (const item of readmeFiles) {
  if (!fs.existsSync(item.path)) continue;

  let content = fs.readFileSync(item.path, 'utf8');

  const vsMarketplaceLinkPattern = `https:\\/\\/marketplace\\.visualstudio\\.com\\/items\\?itemName=YueYu\\.${item.packageKey}`;
  const openVsxLinkPattern = `https:\\/\\/open-vsx\\.org\\/extension\\/YueYu\\/${item.packageKey}`;

  // Replace VS Code Marketplace Badge (static badge)
  const vsBadgeRegex = new RegExp(
    `\\[!\\[VS Code Marketplace\\]\\([^)]+\\)\\]\\(${vsMarketplaceLinkPattern}\\)`,
    'g'
  );
  const vsBadgeReplacement = `[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code%20Marketplace-v${version}-007ACC?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=YueYu.${item.packageKey})`;

  // Replace Open VSX Badge (static badge)
  const ovsxBadgeRegex = new RegExp(
    `\\[!\\[Open VSX\\]\\([^)]+\\)\\]\\(${openVsxLinkPattern}\\)`,
    'g'
  );
  const ovsxBadgeReplacement = `[![Open VSX](https://img.shields.io/badge/Open%20VSX-v${version}-orange?logo=eclipse-ide)](https://open-vsx.org/extension/YueYu/${item.packageKey})`;

  content = content.replace(vsBadgeRegex, vsBadgeReplacement);
  content = content.replace(ovsxBadgeRegex, ovsxBadgeReplacement);

  fs.writeFileSync(item.path, content, 'utf8');
  console.log(`  Updated: ${path.relative(rootDir, item.path)}`);
}

console.log('Successfully updated all README badges.');
