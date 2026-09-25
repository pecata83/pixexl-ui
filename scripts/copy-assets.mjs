import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('src/styles/theme.css', 'dist/theme.css');
copyFileSync('src/tokens/tokens.json', 'dist/tokens.json');
console.log('Copied theme.css and tokens.json to dist/');
