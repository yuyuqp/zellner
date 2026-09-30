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
  
  // Official Eclipse IDE vector path (viewBox 0 0 24 24) scaled to 14x14 at x=5, y=3
  const eclipsePath = 'M11.109.024a15.58 15.58 0 00-.737.023C6.728.361 3.469 2.517 1.579 5.86A12.53 12.53 0 00.021 11.11c-.04.517-.02 1.745.035 2.208.306 2.682 1.353 5.06 3.07 6.965 1.962 2.173 4.586 3.467 7.437 3.663.42.032 1.043.04 1.02.012a2.404 2.404 0 00-.338-.074c-1.674-.33-3.388-1.13-4.777-2.232a12.344 12.344 0 01-2.45-2.636A12.387 12.387 0 011.884 12.5a12.413 12.413 0 01.56-4.274c.785-2.522 2.37-4.726 4.475-6.228A11.073 11.073 0 0111.156.122l.443-.098zm1.474.51C10.646.65 8.807 1.299 7.301 2.4 5.426 3.77 3.995 5.644 3.22 7.746c-.145.397-.282.82-.282.879 0 .012 3.828.024 10.31.024 8.463 0 10.315-.008 10.315-.036 0-.047-.153-.525-.283-.878-.153-.42-.576-1.31-.82-1.722-.4-.683-.91-1.373-1.474-1.992-1.65-1.82-3.593-2.934-5.82-3.334-.785-.141-1.8-.2-2.585-.153zM23.83 9.97c-.02 0-4.792 0-10.609.004l-10.573.008-.011.059c-.036.16-.134 1.081-.134 1.242 0 .028 1.785.032 10.746.032H24v-.075c0-.102-.07-.791-.106-1.054-.02-.16-.04-.216-.063-.216zm-10.573 2.635c-9.37-.004-10.73 0-10.742.035-.02.04.024.557.075.973.02.157.035.298.035.314 0 .027 2.137.035 10.624.035h10.624l.024-.188c.043-.326.102-.97.094-1.067l-.008-.094zm.003 2.718c-8.882 0-10.321.004-10.321.035 0 .02.054.208.12.42a11.122 11.122 0 002.072 3.741c.282.342.945 1.036 1.228 1.287 1.568 1.4 3.247 2.216 5.18 2.53.605.094.886.113 1.75.11.91 0 1.297-.032 2.023-.177 2.11-.416 3.914-1.451 5.53-3.17 1.267-1.348 2.106-2.76 2.628-4.41l.117-.366z';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${text}"><title>${label}: ${text}</title><filter id="blur"><feGaussianBlur stdDeviation="16"/></filter><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="${totalWidth}" height="20" rx="3"/></clipPath><g clip-path="url(#r)"><rect width="${labelWidth}" height="20" fill="#555"/><rect x="${labelWidth}" width="${versionWidth}" height="20" fill="#ea7233"/><rect width="${totalWidth}" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><g transform="translate(5, 3) scale(0.583333)"><path fill="#ffffff" d="${eclipsePath}"/></g><g transform="scale(.1)"><text x="${labelTextX}" y="150" fill-opacity=".3" textLength="550">${label}</text><text x="${labelTextX}" y="140" textLength="550">${label}</text></g><g transform="scale(.1)"><text x="${versionTextX}" y="150" fill-opacity=".3" textLength="${textLength}">${text}</text><text x="${versionTextX}" y="140" textLength="${textLength}">${text}</text></g></g></svg>`;
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
