const fs = require('fs');
const path = require('path');
let sharp;

try {
  sharp = require('sharp');
} catch (err) {
  console.error('Missing dependency: sharp. Run `npm install sharp --save-dev` and try again.');
  process.exit(1);
}

const IMG_DIR = path.join(__dirname, '..', 'public', 'img');
const OUT_DIR = path.join(IMG_DIR, 'optimized');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(IMG_DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));

async function convert(file) {
  const input = path.join(IMG_DIR, file);
  const name = file.replace(/\.(png|jpe?g)$/i, '');
  const outAvif = path.join(OUT_DIR, `${name}.avif`);
  const outWebp = path.join(OUT_DIR, `${name}.webp`);

  try {
    await sharp(input)
      .avif({ quality: 60 })
      .toFile(outAvif);
    console.log('Written', outAvif);
  } catch (e) {
    console.error('AVIF failed for', file, e.message || e);
  }

  try {
    await sharp(input)
      .webp({ quality: 70 })
      .toFile(outWebp);
    console.log('Written', outWebp);
  } catch (e) {
    console.error('WEBP failed for', file, e.message || e);
  }
}

(async function main() {
  for (const f of files) {
    console.log('Converting', f);
    // skip already optimized outputs
    const name = f.replace(/\.(png|jpe?g)$/i, '');
    const avifPath = path.join(OUT_DIR, `${name}.avif`);
    const webpPath = path.join(OUT_DIR, `${name}.webp`);
    if (fs.existsSync(avifPath) && fs.existsSync(webpPath)) {
      console.log('Skipping (already exists):', f);
      continue;
    }
    await convert(f);
  }
  console.log('Done. Optimized images are in public/img/optimized');
})();
