import fs from 'node:fs';
import path from 'node:path';
import { parse, printParseErrorCode } from 'jsonc-parser';

/**
 * Loads and parses a JSON / JSONC theme file.
 *
 * @param {string} filePath
 * @returns {{ theme: any, filePath: string }}
 */
function readThemeFile(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Theme file not found: ${absolutePath}`);
  }
  const content = fs.readFileSync(absolutePath, 'utf8');
  const errors = [];
  const theme = parse(content, errors, { allowTrailingComma: true });
  if (errors.length > 0) {
    const errorDetails = errors
      .map(e => `${printParseErrorCode(e.error)} at offset ${e.offset}`)
      .join(', ');
    throw new Error(`Failed to parse ${absolutePath}: ${errorDetails}`);
  }
  return { theme, filePath: absolutePath };
}

/**
 * Resolves the inheritance chain starting from the entry file.
 * Returns an array of themes ordered from root ancestor -> intermediate -> leaf.
 *
 * @param {string} entryPath
 * @returns {Array<{ theme: any, filePath: string }>}
 */
function resolveThemeChain(entryPath) {
  const chain = [];
  const visited = new Set();
  let currentPath = path.resolve(entryPath);

  while (currentPath) {
    if (visited.has(currentPath)) {
      throw new Error(`Circular include detected: ${currentPath}`);
    }
    visited.add(currentPath);

    const { theme, filePath } = readThemeFile(currentPath);
    chain.unshift({ theme, filePath });

    if (theme.include) {
      currentPath = path.resolve(path.dirname(filePath), theme.include);
    } else {
      currentPath = null;
    }
  }

  return chain;
}

/**
 * Merges a chain of themes (ordered base to leaf) into a single compiled theme.
 *
 * @param {string} entryPath
 * @returns {{ compiled: any, chain: string[], filesCount: number }}
 */
export function compileTheme(entryPath) {
  const chain = resolveThemeChain(entryPath);

  const compiled = {
    $schema: 'vscode://schemas/color-theme',
    name: '',
    type: 'light',
    colors: {},
    tokenColors: [],
    semanticTokenColors: {},
    semanticHighlighting: undefined
  };

  const chainNames = [];

  for (const { theme, filePath } of chain) {
    const fileName = path.basename(filePath);
    chainNames.push(`${theme.name || fileName} (${fileName})`);

    if (theme.$schema) {
      compiled.$schema = theme.$schema;
    }
    if (theme.name) {
      compiled.name = theme.name;
    }
    if (theme.type) {
      compiled.type = theme.type;
    }
    if (typeof theme.semanticHighlighting === 'boolean') {
      compiled.semanticHighlighting = theme.semanticHighlighting;
    }

    // Merge workbench colors (child keys overwrite base keys)
    if (theme.colors && typeof theme.colors === 'object') {
      for (const [key, value] of Object.entries(theme.colors)) {
        if (value === null || value === undefined) {
          delete compiled.colors[key];
        } else {
          compiled.colors[key] = value;
        }
      }
    }

    // Merge tokenColors (in VS Code, child rules are appended to take precedence)
    if (Array.isArray(theme.tokenColors)) {
      compiled.tokenColors.push(...theme.tokenColors);
    }

    // Merge semanticTokenColors (child keys overwrite base keys)
    if (theme.semanticTokenColors && typeof theme.semanticTokenColors === 'object') {
      for (const [key, value] of Object.entries(theme.semanticTokenColors)) {
        if (value === null || value === undefined) {
          delete compiled.semanticTokenColors[key];
        } else {
          compiled.semanticTokenColors[key] = value;
        }
      }
    }
  }

  // Clean up optional fields if unset
  if (compiled.semanticHighlighting === undefined) {
    delete compiled.semanticHighlighting;
  }
  if (Object.keys(compiled.semanticTokenColors).length === 0) {
    delete compiled.semanticTokenColors;
  }

  return { compiled, chain: chainNames, filesCount: chain.length };
}

// CLI execution
const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));

if (isMain || process.argv[1]?.endsWith('compile-theme.js')) {
  const args = process.argv.slice(2);
  const inputArg = args[0] || 'references/2026-light.json';
  const outputArg = args[1] || 'interim/2026-light.compiled.json';

  console.log(`\nCompiling theme from: ${inputArg}`);
  const { compiled, chain } = compileTheme(inputArg);

  console.log('\nInheritance chain resolved (base -> leaf):');
  chain.forEach((name, idx) => console.log(`  ${idx + 1}. ${name}`));

  console.log('\nCompilation summary:');
  console.log(`  - Theme Name: ${compiled.name}`);
  console.log(`  - Theme Type: ${compiled.type}`);
  console.log(`  - Total Colors: ${Object.keys(compiled.colors).length}`);
  console.log(`  - Total Token Rules: ${compiled.tokenColors.length}`);
  console.log(
    `  - Semantic Token Rules: ${compiled.semanticTokenColors ? Object.keys(compiled.semanticTokenColors).length : 0}`
  );
  console.log(`  - Semantic Highlighting: ${compiled.semanticHighlighting ?? 'inherited/default'}`);

  const outputPath = path.resolve(outputArg);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(compiled, null, 2), 'utf8');

  console.log(`\nSuccessfully saved compiled theme to:\n  ${outputPath}\n`);
}

