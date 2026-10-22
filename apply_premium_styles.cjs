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
    } else if (stats.isFile() && (filepath.endsWith('.css') || filepath.endsWith('.tsx'))) {
      callback(filepath);
    }
  }
};

walkSync(srcDir, (filepath) => {
  if (!filepath.endsWith('.css')) return;
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;

  // 1. Primary Buttons Update
  // Find background: linear-gradient(...) or var(--gold) in buttons and replace them.
  // Actually, let's just find `.ctaButton { ... }`, `.submitBtn { ... }`, etc.
  
  // Replace card backgrounds
  content = content.replace(/background:\s*var\(--surface\);/g, 'background: var(--surface);\n  border: 1px solid var(--border);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);');
  
  // Ensure cards on hover have soft glow
  content = content.replace(/box-shadow:\s*0\s+10px\s+30px\s+rgba\(0,0,0,0.3\);/g, 'box-shadow: 0 8px 24px var(--gold-glow);');
  content = content.replace(/box-shadow:\s*0\s+10px\s+40px\s+rgba\(0,0,0,0.3\);/g, 'box-shadow: 0 8px 24px var(--gold-glow);');
  
  // Badges and pills
  content = content.replace(/border:\s*1px\s+solid\s+var\(--gold-border\);\s*background:\s*var\(--gold-tint\);/g, 'border: 1px solid var(--gold-border);\n  background: var(--gold-tint);\n  color: var(--gold);');
  
  // Icon containers
  content = content.replace(/\.serviceIconWrapper\s*\{[^}]+\}/g, (match) => {
    return match.replace(/background:\s*var\(--gold-tint\);/g, 'background: var(--gold-tint);\n  border: 1px solid var(--gold-border);');
  });

  // Buttons
  const buttonPattern = /(?:background:\s*linear-gradient\([^)]+\)|background:\s*var\(--gold\));\s*color:\s*(?:var\(--bg-deep\)|#000);/g;
  content = content.replace(buttonPattern, 'background: var(--gold-gradient);\n  color: var(--text-on-gold);\n  font-weight: 600;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px var(--gold-glow);');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated CSS: ${filepath}`);
  }
});
