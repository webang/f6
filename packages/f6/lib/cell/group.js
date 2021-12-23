"use strict";
exports.__esModule = true;
exports.CellGroup = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var CellGroup = function (_a) {
    var children = _a.children;
    var prefix = (0, name_1.defineName)("cell-group")[0];
    return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix }, { children: children }), void 0);
};
exports.CellGroup = CellGroup;
exports["default"] = exports.CellGroup;
//# sourceMappingURL=group.js.map