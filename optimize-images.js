import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size / (1024 * 1024); // Convert to MB
    
    console.log(`Optimizing ${path.basename(inputPath)} (${originalSize.toFixed(2)} MB)...`);
    
    await sharp(inputPath)
      .resize(1920, 1440, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 75, progressive: true })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size / (1024 * 1024);
    const reduction = ((1 - (newSize / originalSize)) * 100).toFixed(1);
    
    console.log(`✓ Optimized to ${newSize.toFixed(2)} MB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  
  // Optimize trinath images
  const trinathPath = path.join(assetsDir, 'trinath.png');
  const trinathTempPath = path.join(assetsDir, 'trinath-temp.jpg');
  
  await optimizeImage(trinathPath, trinathTempPath);
  fs.renameSync(trinathTempPath, trinathPath);
  
  const trinathfrontPath = path.join(assetsDir, 'trinathfront.png');
  const trinathfrontTempPath = path.join(assetsDir, 'trinathfront-temp.jpg');
  
  await optimizeImage(trinathfrontPath, trinathfrontTempPath);
  fs.renameSync(trinathfrontTempPath, trinathfrontPath);
}

main();
