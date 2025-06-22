const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/pages');
const distDir = path.join(__dirname, 'dist');

nunjucks.configure('src', { autoescape: true });

fs.readdirSync(srcDir).forEach(file => {
  if (path.extname(file) === '.njk') {
    const html = nunjucks.render(`pages/${file}`);
    fs.writeFileSync(path.join(distDir, file.replace('.njk', '.html')), html);
  }
});

// Копируем папку scripts (если есть)
const scriptsSrc = path.join(__dirname, 'src/scripts');
const scriptsDist = path.join(distDir, 'scripts');

if (fs.existsSync(scriptsSrc)) {
  fs.mkdirSync(scriptsDist, { recursive: true });
  fs.readdirSync(scriptsSrc).forEach(file => {
    const srcFile = path.join(scriptsSrc, file);
    const distFile = path.join(scriptsDist, file);
    if (fs.lstatSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, distFile);
    }
  });
}
