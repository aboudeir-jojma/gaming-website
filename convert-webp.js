import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public/imggames";
const outputDir = "./public/imggames-webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(ext, ".webp"));

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ ${file} → ${outputPath}`))
      .catch(err => console.error("❌ Error:", err));
  }
});
