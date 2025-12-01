const fs = require('fs');
const path = require('path');

const tempPath = path.join('dist', 'github-snake-temp.svg');
const dayPath = path.join('dist', 'github-snake.svg');
const nightPath = path.join('dist', 'github-snake-dark.svg');

// Couleurs
const dayColor = '#F3BA2F';    // Jaune Binance
const nightColor = '#800020';  // Rouge Bordeaux

// Lire le SVG temporaire
let svg = fs.readFileSync(tempPath, 'utf8');

// Snake + carré jour
let daySvg = svg.replace(/fill=".*?"/g, `fill="${dayColor}"`);
fs.writeFileSync(dayPath, daySvg);

// Snake + carré nuit
let nightSvg = svg.replace(/fill=".*?"/g, `fill="${nightColor}"`);
fs.writeFileSync(nightPath, nightSvg);

console.log('Snake SVGs colorized successfully!');
