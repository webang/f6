const fs = require('fs');
const path = require('path')
const { parseDocument } = require('./run-docs');

const packagesPath = '../f6/packages/'

let list =
  fs.readdirSync(packagesPath)
  .filter(it => it.indexOf('.') !== 0)
  .filter(it => {
    var stat = fs.statSync(`${packagesPath}${it}`);
    return stat.isDirectory()
  })
  .filter(it => {
    return fs.existsSync(`${packagesPath}${it}/demo`)
  })

list.forEach(name => {
  parseDocument(path.resolve(__dirname, packagesPath + name), name);
  console.log(`[built] ${name} finish`);
});

fs.watch(path.resolve(__dirname, packagesPath), {
  recursive: true
}, function (event, filename) {
  if (filename.includes(".md")) {
    const [name, file] = filename.split('/');
    parseDocument(packagesPath + name, name);
    console.log(`[built] ${name} finish`);
  }
});