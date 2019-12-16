const fs = require('fs');
const path = require('path');
const txt = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8');
const inputs = txt.split(',');