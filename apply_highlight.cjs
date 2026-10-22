const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const walkSync = (dir, callback) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && filepath.endsWith('.css')) {
      callback(filepath);
    }
  }
};

walkSync(srcDir, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;

  // Replace .highlight { color: var(--gold); } with gradient text
  content = content.replace(/\.highlight\s*\{\s*color:\s*var\(--gold\);\s*\}/g, '.highlight {\n  background: var(--gold-gradient);\n  -webkit-background-clip: text;\n  color: transparent;\n}');

  // In FooterCTA, replace .goldText { color: var(--gold); } with gradient
  if (filepath.includes('FooterCTA')) {
    content = content.replace(/\.goldText\s*\{\s*color:\s*var\(--gold\);\s*\}/g, '.goldText {\n  background: var(--gold-gradient);\n  -webkit-background-clip: text;\n  color: transparent;\n}');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated highlight in: ${filepath}`);
  }
});
