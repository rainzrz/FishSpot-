/**
 * Build script — copia prototype/ para dist/
 * Injeta versão e data no HTML de saída
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "prototype");
const DIST = path.join(__dirname, "..", "dist");

// Limpa e cria dist/
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

const files = fs.readdirSync(SRC);
files.forEach(file => {
  const src = path.join(SRC, file);
  const dest = path.join(DIST, file);
  let content = fs.readFileSync(src, "utf8");

  // Injeta metadado de build no HTML
  if (file.endsWith(".html")) {
    const buildMeta = `  <meta name="build-date" content="${new Date().toISOString()}" />\n`;
    content = content.replace("</head>", `${buildMeta}</head>`);
  }

  fs.writeFileSync(dest, content);
  console.log(`  ✓ ${file}`);
});

console.log(`\nBuild concluído → dist/ (${files.length} arquivo(s))`);
