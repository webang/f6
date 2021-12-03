const fs = require('fs');
const path = require('path');

const { glyphs } = require('../iconfont/iconfont.json');
const types = glyphs.map(it => `"${it.font_class}"`).join('|');

fs.writeFileSync(
  path.resolve(__dirname, '../lib/interface.ts'),
  `export type IconType = ${types}`
);