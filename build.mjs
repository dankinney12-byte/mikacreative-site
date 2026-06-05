// Compile src/*.jsx into a single js/app.js using Babel.
// Run after editing any src/*.jsx file:  npm run build

import { readFileSync, writeFileSync } from 'node:fs';
import { transformSync } from '@babel/core';
import presetReact from '@babel/preset-react';
import presetEnv from '@babel/preset-env';

const SOURCES = [
  'src/stubs.jsx',
  'src/launch.js',      // Grow with Joy launch config + getPhase()
  'src/challenge.jsx',  // Grow with Joy challenge page components
  'src/app-1.jsx',
  'src/app-2.jsx',
  'src/app-3.jsx',
];

const banner = `/* MIKA creative — compiled bundle. Edit src/*.jsx then run \`npm run build\`. */\n`;

const parts = [banner];
for (const path of SOURCES) {
  const source = readFileSync(path, 'utf8');
  const { code } = transformSync(source, {
    filename: path,
    presets: [
      [presetEnv, { targets: '> 0.5%, last 2 versions, not dead' }],
      [presetReact, { runtime: 'classic' }],
    ],
    sourceMaps: false,
    babelrc: false,
    configFile: false,
  });
  // Each source file destructures from React at the top scope:
  //   const { useState, useEffect } = React;
  // After concatenation those become duplicate `const` declarations.
  // Convert top-of-file React destructures to `var` so redeclaration is legal.
  const deduped = code.replace(
    /^(\s*)(?:const|let)(\s+\{[^}]*\}\s*=\s*React\s*;)/gm,
    '$1var$2'
  );
  parts.push(`\n// === ${path} ===\n`);
  parts.push(deduped);
}

writeFileSync('js/app.js', parts.join('\n'));
const bytes = parts.join('\n').length;
console.log(`Wrote js/app.js (${bytes.toLocaleString()} bytes)`);
