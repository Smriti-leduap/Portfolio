import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size / (1024 * 1024);
    
    console.log(`Converting ${path.basename(inputPath)} to WebP (${originalSize.toFixed(2)} MB)...`);
    
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size / (1024 * 1024);
    const reduction = ((1 - (newSize / originalSize)) * 100).toFixed(1);
    
    console.log(`✓ Converted to ${newSize.toFixed(2)} MB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function main() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  
  
  const trinathPath = path.join(assetsDir, 'trinath.png');
  const trinathWebP = path.join(assetsDir, 'trinath.webp');
  
  await convertToWebP(trinathPath, trinathWebP);
  

  fs.unlinkSync(trinathPath);
  
  const trinathfrontPath = path.join(assetsDir, 'trinathfront.png');
  const trinathfrontWebP = path.join(assetsDir, 'trinathfront.webp');
  
  await convertToWebP(trinathfrontPath, trinathfrontWebP);
  

  fs.unlinkSync(trinathfrontPath);
  
  console.log('\n✓ All images converted to WebP format!');
}

main();
