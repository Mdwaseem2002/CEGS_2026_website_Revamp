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
    } else if (stats.isFile() && (filepath.endsWith('.css') || filepath.endsWith('.tsx') || filepath.endsWith('.ts'))) {
      callback(filepath);
    }
  }
};

walkSync(srcDir, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;

  // 1. Replace old variables (with or without fallbacks)
  content = content.replace(/var\(--color-bg(?:,\s*#[0-9A-Fa-f]{3,6})?\)/g, 'var(--bg)');
  content = content.replace(/var\(--color-surface(?:,\s*(?:#[0-9A-Fa-f]{3,6}|rgba\([^)]+\)))?\)/g, 'var(--surface)');
  content = content.replace(/var\(--color-surface-hover(?:,\s*(?:#[0-9A-Fa-f]{3,6}|rgba\([^)]+\)))?\)/g, 'var(--surface-raised)');
  content = content.replace(/var\(--color-border(?:,\s*(?:#[0-9A-Fa-f]{3,6}|rgba\([^)]+\)))?\)/g, 'var(--border)');
  content = content.replace(/var\(--color-text-primary(?:,\s*#[0-9A-Fa-f]{3,6})?\)/g, 'var(--text)');
  content = content.replace(/var\(--color-text-secondary(?:,\s*(?:#[0-9A-Fa-f]{3,6}|rgba\([^)]+\)))?\)/g, 'var(--text-body)');
  content = content.replace(/var\(--color-gold(?:,\s*#[0-9A-Fa-f]{3,6})?\)/g, 'var(--gold)');
  content = content.replace(/var\(--color-gold-hover(?:,\s*#[0-9A-Fa-f]{3,6})?\)/g, 'var(--gold-light)');
  content = content.replace(/var\(--color-gold-glow(?:,\s*rgba\([^)]+\))?\)/g, 'var(--gold-glow)');

  // 2. Replace hardcoded old gold hex codes globally with var(--gold)
  const oldGolds = ['#E5C158', '#FFD700', '#D2BE60', '#D4AF37', '#E8C547', '#F0D77A', '#A8841F', '#F4D03F', '#D2B44C'];
  oldGolds.forEach(gold => {
    // Case insensitive replacement for the hex codes
    const regex = new RegExp(gold, 'gi');
    content = content.replace(regex, 'var(--gold)');
  });

  // 3. Replace common rgba gold combinations
  content = content.replace(/rgba\(\s*212\s*,\s*175\s*,\s*55\s*,\s*0\.[234][0-9]*\s*\)/g, 'var(--gold-border)');
  content = content.replace(/rgba\(\s*212\s*,\s*175\s*,\s*55\s*,\s*0\.1[5-9]*\s*\)/g, 'var(--gold-glow)');
  content = content.replace(/rgba\(\s*212\s*,\s*175\s*,\s*55\s*,\s*0\.0[0-9]*\s*\)/g, 'var(--gold-tint)');
  content = content.replace(/rgba\(\s*212\s*,\s*175\s*,\s*55\s*,\s*1\s*\)/g, 'var(--gold)');

  // 4. Replace other hardcoded hex codes
  // White/Black mappings
  content = content.replace(/#ffffff/gi, 'var(--text)');
  content = content.replace(/#fff\b/gi, 'var(--text)');
  
  // Replace dark backgrounds
  content = content.replace(/background-color:\s*#[0-9a-fA-F]{3,6};/g, (match) => {
    if (match.toLowerCase().includes('0c0c0c') || match.toLowerCase().includes('050508') || match.toLowerCase().includes('030712')) {
      return 'background-color: var(--bg);';
    }
    if (match.toLowerCase().includes('000') || match.toLowerCase().includes('000000')) {
      return 'background-color: var(--bg-deep);';
    }
    return match;
  });

  content = content.replace(/background:\s*#[0-9a-fA-F]{3,6};/g, (match) => {
    if (match.toLowerCase().includes('0c0c0c') || match.toLowerCase().includes('050508') || match.toLowerCase().includes('030712')) {
      return 'background: var(--bg);';
    }
    if (match.toLowerCase().includes('000') || match.toLowerCase().includes('000000')) {
      return 'background: var(--bg-deep);';
    }
    return match;
  });

  // Common RGBA text
  content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.[678][0-9]*\s*\)/g, 'var(--text-body)');
  content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.[45][0-9]*\s*\)/g, 'var(--text-muted)');
  content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.0[1-9][0-9]*\s*\)/g, 'var(--surface)');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated: ${filepath}`);
  }
});

console.log('Replacement complete.');
