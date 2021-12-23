import React from "react";
import { defineName } from "../utils/name";
import { jsx as _jsx } from "react/jsx-runtime";
export var CellGroup = function CellGroup(_ref) {
  var children = _ref.children;

  var _defineName = defineName("cell-group"),
      prefix = _defineName[0];

  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    children: children
  });
};
export default CellGroup;