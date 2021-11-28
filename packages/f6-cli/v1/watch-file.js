const fs = require('fs');
const path = require('path')
const { parseDocument } = require('./run-docs');

const list = [
  'button',
  // 'loading',
  // 'pull-refresh',
  // 'infinite-scroll',
  // 'cell',
  // 'spinner',
  // 'dialog',
  // 'popover',
  // 'popup',
  // 'tab',
  // 'switch',
  // 'toast',
  // 'overlay',
];

list.forEach(name => {
  parseDocument(path.resolve(__dirname, '../f6/packages/' + name), name);
  console.log(`[built] ${name} finish`);
});

fs.watch(path.resolve(__dirname, '../f6/packages/'), {
  recursive: true
}, function (event, filename) {
  if (filename.includes(".md")) {
    const [name, file] = filename.split('/');
    parseDocument('../f6/packages/' + name, name);
    console.log(`[built] ${name} finish`);
  }
});