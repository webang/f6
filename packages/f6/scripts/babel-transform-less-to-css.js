module.exports = function () {
  return {
    visitor: {
      ImportDeclaration,
    },
  };
};

function ImportDeclaration(path, source) {
  if (path.node.source.value.endsWith(".less")) {
    path.node.source.value = path.node.source.value.replace(/\.less$/, ".css");
  }
}
