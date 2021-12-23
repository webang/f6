"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportRef = void 0;

var supportRef = function supportRef(c) {
  if ("$$typeof" in c) {
    return c["$$typeof"] === "Symbol(react.forward_ref)";
  }

  return false;
};

exports.supportRef = supportRef;