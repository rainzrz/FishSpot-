/**
 * Build script — copia src/ para dist/ mantendo estrutura
 * Injeta metadado de versão e data no HTML de saída
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "src");
const DIST = path.join(__dirname, "..", "dist");

function copyDir(src, dest) {
  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true });
  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach(entry => {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      let content = fs.readFileSync(srcPath, "utf8");
      if (entry.endsWith(".html")) {
        const buildMeta = `  <meta name="build-date" content="${new Date().toISOString()}" />\n`;
        content = content.replace("</head>", `${buildMeta}</head>`);
      }
      fs.writeFileSync(destPath, content);
      console.log(`  ✓ ${path.relative(SRC, destPath)}`);
    }
  });
}

copyDir(SRC, DIST);
console.log(`\nBuild concluído → dist/`);
