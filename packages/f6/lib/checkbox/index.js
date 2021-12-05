"use strict";
exports.__esModule = true;
exports.CheckboxGroupProps = exports.CheckboxProps = void 0;
var tslib_1 = require("tslib");
var checkbox_1 = (0, tslib_1.__importDefault)(require("./checkbox"));
var checkbox_group_1 = (0, tslib_1.__importDefault)(require("./checkbox-group"));
require("./index.less");
var checkbox_2 = require("./checkbox");
(0, tslib_1.__createBinding)(exports, checkbox_2, "default", "CheckboxProps");
var checkbox_group_2 = require("./checkbox-group");
(0, tslib_1.__createBinding)(exports, checkbox_group_2, "default", "CheckboxGroupProps");
checkbox_1["default"].Group = checkbox_group_1["default"];
exports["default"] = checkbox_1["default"];
//# sourceMappingURL=index.js.map