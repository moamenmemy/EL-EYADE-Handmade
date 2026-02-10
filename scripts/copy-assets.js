const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'public');
const dst = path.resolve(__dirname, '..', 'dist', 'eyade', 'browser');

function copyRecursive(src, dst) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) copyRecursive(srcPath, dstPath);
    else fs.copyFileSync(srcPath, dstPath);
  }
}

copyRecursive(src, dst);
console.log('Copied public assets to', dst);
