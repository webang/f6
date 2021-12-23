"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineName = void 0;
var namespace = "wax";

var defineName = function defineName(name) {
  return [namespace + "-" + name];
};

exports.defineName = defineName;