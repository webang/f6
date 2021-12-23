"use strict";
exports.__esModule = true;
exports.CheckListItem = exports.CheckList = void 0;
var tslib_1 = require("tslib");
var check_list_1 = (0, tslib_1.__importDefault)(require("./check-list"));
exports.CheckList = check_list_1["default"];
var check_item_1 = (0, tslib_1.__importDefault)(require("./check-item"));
exports.CheckListItem = check_item_1["default"];
require("./index.less");
check_list_1["default"].Item = check_item_1["default"];
exports["default"] = check_list_1["default"];
//# sourceMappingURL=index.js.map