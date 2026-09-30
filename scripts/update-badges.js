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

console.log(`Generating local SVG badges for version v${version}...`);

function createVsCodeBadge(ver) {
  const label = 'VS Code Marketplace';
  const text = `v${ver}`;
  const labelWidth = 127;
  const versionWidth = Math.max(45, 10 + text.length * 7);
  const totalWidth = labelWidth + versionWidth;
  const labelTextX = 645;
  const versionTextX = Math.round((labelWidth + versionWidth / 2) * 10);
  const textLength = ver.length * 70 + 70;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${text}"><title>${label}: ${text}</title><filter id="blur"><feGaussianBlur stdDeviation="16"/></filter><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${totalWidth}" height="20" rx="3"/></clipPath><g clip-path="url(#r)"><rect width="${labelWidth}" height="20" fill="#555"/><rect x="${labelWidth}" width="${versionWidth}" height="20" fill="#007acc"/><rect width="${totalWidth}" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><g transform="scale(.1)"><text x="${labelTextX}" y="150" fill-opacity=".3" textLength="1170">${label}</text><text x="${labelTextX}" y="140" textLength="1170">${label}</text></g><g transform="scale(.1)"><text x="${versionTextX}" y="150" fill-opacity=".3" textLength="${textLength}">${text}</text><text x="${versionTextX}" y="140" textLength="${textLength}">${text}</text></g></g></svg>`;
}

function createOpenVsxBadge(ver) {
  const label = 'Open VSX';
  const text = `v${ver}`;
  const labelWidth = 82;
  const versionWidth = Math.max(45, 10 + text.length * 7);
  const totalWidth = labelWidth + versionWidth;
  const labelTextX = 505;
  const versionTextX = Math.round((labelWidth + versionWidth / 2) * 10);
  const textLength = ver.length * 70 + 70;
  const iconBase64 = 'PHN2ZyBmaWxsPSJ3aGl0ZXNtb2tlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RWNsaXBzZSBJREU8L3RpdGxlPjxwYXRoIGQ9Ik0xMS4xMDkuMDI0YTE1LjU4IDE1LjU4IDAgMDAtLjczNy4wMjNDNi43MjguMzYxIDMuNDY5IDIuNTE3IDEuNTc5IDUuODZBMTIuNTMgMTIuNTMgMCAwMC4wMjEgMTEuMTFjLS4wNC41MTctLjAy IDEuNzQ1LjAzNSAyLjIwOC4zMDYgMi42ODIgMS4zNTMgNS4wNiAzLjA3IDYuOTY1 IDEuOTYyIDIuMTczIDQuNTg2IDMuNDY3IDMuNTYzLjQyLjAzMiAxLjA0My4wNCAxLjAyLjAxMmEyLjQwNCAyLjQwNCAwIDAwLS4zMzgtLjA3NGMtMS42NzQtLjMzLTMuMzg4LTEuMTMtNC43NzctMi4yMzJhMTIuMzQ0IDEyLjM0NCAwIDAxLTIuNDUtMi42MzZBMTIuMzg3IDEyLjM4NyAwIDAxMS44ODQgMTIuNWExMi40MTMgMTIuNDEzIDAgMDEuNTYtNC4yNzRjLjc4NS0yLjUyMiAyLjM3LTQuNzI2IDQuNDc1LTYuMjI4QTExLjA3MyAxMS4wNzMgMCAwMTExLjE1Ni4xMjJsLjQ0My0uMDk4em0xLjQ3NC41MUMxMC42NDYiLjY1IDguODA3 IDEuMjk5IDcuMzAxIDIuNCA1LjQyNiAzLjc3IDMuOTk1IDUuNjQ0IDMuMjIgNy43NDZjLS4xNDUuMzk3LS4yODIuODItLjkyOC44NzkgMCAuMDEyIDMuODI4LjAyNCAxMC4zMS4wMjQgOC40NjMgMCAxMC4zMTUtLjAwOCAxMC4zMTUtLjAzNiAwLS4wNDctLjE1My0uNTI1LS4yODMtLjg3OC0uMTUzLS40Mi0uNTc2LTEuMzEtLjgyLTEuNzIyLS40LS42ODMtLjkxLTEuMzczLTEuNDc0LTEuOTkyLTEuNjUtMS44Mi0zLjU5My0yLjkzNC01LjgyLTMuMzM0LS43ODUtLjE4MS0xLjgtLjItMi41ODUtLjE1em0yMy44MyA5Ljk3Yy0uMDIgMC00Ljc5MiAwLTEwLjYwOS4wMDRsLTEwLjU3My4wMDgtLjAxMS4wNTljLS4wMzYuMTYtLjEzNCAxLjA4MS0uMTM0IDEuMjQyIDAgLjAyOCAxLjc4NS4wMzIgMTAuNzQ2LjAzMkgyNHYtLjA3NWMwLS4xMDItLjA3LS43OTEtLjEwNi0xLjA1NC0uMDItLjE2LS4wNC0uMjE2LS4wNjMtLjIxNnptLTEwLjU3MyAyLjYzNWMtOS4zNy0uMDA4LTEwLjczIDAgMTAuNzQyLjAzNS0uMDIuMDQuMDI0LjU1Ny4wNzUuOTczLjAyLjE1Ny4wMzUuMjk4LjAzNS4zMTQgMCAuMDI3IDIuMTM3LjAzNSAxMC42MjQuMDM1aDEwLjYyNGwuMDI0LS4xODhjLjA0My0uMzI2LjEwMi0uOTcuMDk4LTEuMDY3bC0uMDA4LS4wOTR6bS4wMDMgMi43MThjLTguODgyIDAtMTAuMzIxLjAwNC0xMC4zMjEuMDM1IDAgLjAyLjA1NC4y04LjEyLjQyYTExLjEyMiAxMS4xMjIgMCAwMDIuMDcyIDMuNzQxYy4yODIuMzQyLjk0NSAxLjAzNiAxLjIyOCAxLjI4NyAxLjU2OCAxLjQgMy4yNDcgMi4yMTYgNS4xOCAyLjUzLjYwNS4wOTQuODg2LjExMyAxLjc1LjExLjkxIDAgMS4yOTctLjAzMiAyLjAyMy0uMTc3IDIuMTEtLjQxNiAzLjkxNC0xLjQ1MSA1\.TTMtMy4xNyAxLjI2Ny0xLjM0OCAyLjEwNi0yLjc6IDIuNjI4LTQuNDFsLjExNy0uMzY2eiIvPjwvc3ZnPg==';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${text}"><title>${label}: ${text}</title><filter id="blur"><feGaussianBlur stdDeviation="16"/></filter><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${totalWidth}" height="20" rx="3"/></clipPath><g clip-path="url(#r)"><rect width="${labelWidth}" height="20" fill="#555"/><rect x="${labelWidth}" width="${versionWidth}" height="20" fill="#ea7233"/><rect width="${totalWidth}" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><image x="5" y="3" width="14" height="14" href="data:image/svg+xml;base64,${iconBase64}"/><g transform="scale(.1)"><text x="${labelTextX}" y="150" fill-opacity=".3" textLength="550">${label}</text><text x="${labelTextX}" y="140" textLength="550">${label}</text></g><g transform="scale(.1)"><text x="${versionTextX}" y="150" fill-opacity=".3" textLength="${textLength}">${text}</text><text x="${versionTextX}" y="140" textLength="${textLength}">${text}</text></g></g></svg>`;
}

const badgeDirs = [
  path.join(rootDir, 'assets', 'badges'),
  path.join(rootDir, 'packages', 'vscode', 'assets', 'badges'),
  path.join(rootDir, 'packages', 'vscode-extended', 'assets', 'badges'),
];

for (const dir of badgeDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'vscode-marketplace.svg'), createVsCodeBadge(version), 'utf8');
  fs.writeFileSync(path.join(dir, 'open-vsx.svg'), createOpenVsxBadge(version), 'utf8');
  console.log(`  Generated SVGs in: ${path.relative(rootDir, dir)}`);
}

// Update README files to relative SVG badge paths
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

  const vsBadgeRegex = new RegExp(
    `\\[!\\[VS Code Marketplace\\]\\([^)]+\\)\\]\\(${vsMarketplaceLinkPattern}\\)`,
    'g'
  );
  const vsBadgeReplacement = `[![VS Code Marketplace](assets/badges/vscode-marketplace.svg)](https://marketplace.visualstudio.com/items?itemName=YueYu.${item.packageKey})`;

  const ovsxBadgeRegex = new RegExp(
    `\\[!\\[Open VSX\\]\\([^)]+\\)\\]\\(${openVsxLinkPattern}\\)`,
    'g'
  );
  const ovsxBadgeReplacement = `[![Open VSX](assets/badges/open-vsx.svg)](https://open-vsx.org/extension/YueYu/${item.packageKey})`;

  content = content.replace(vsBadgeRegex, vsBadgeReplacement);
  content = content.replace(ovsxBadgeRegex, ovsxBadgeReplacement);

  fs.writeFileSync(item.path, content, 'utf8');
  console.log(`  Updated README link: ${path.relative(rootDir, item.path)}`);
}

console.log('Successfully updated canonical relative SVG badges across all packages.');
