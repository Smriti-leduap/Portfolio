import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageExtensions = new Set(['.png', '.jpg', '.jpeg']);

async function convertDirectory(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    if (!file.isFile() || !imageExtensions.has(path.extname(file.name).toLowerCase())) continue;

    const inputPath = path.join(directory, file.name);
    const outputPath = path.join(directory, `${path.basename(file.name, path.extname(file.name))}.webp`);
    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({ quality: 84, effort: 5 })
      .toFile(outputPath);

    const compressedSize = fs.statSync(outputPath).size;
    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(1);
    console.log(`${file.name}: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${reduction}% smaller)`);
  }
}

await convertDirectory(path.join(__dirname, 'src', 'assets'));
await convertDirectory(path.join(__dirname, 'public'));
await convertDirectory(path.join(__dirname, 'public', 'assets'));
