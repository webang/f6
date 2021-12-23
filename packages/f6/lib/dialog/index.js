"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var show_1 = require("./show");
var alert_1 = require("./alert");
var confirm_1 = require("./confirm");
var dialog_1 = (0, tslib_1.__importDefault)(require("./dialog"));
require("./index.less");
var Dialog = dialog_1["default"];
Dialog.show = show_1.show;
Dialog.alert = alert_1.alert;
Dialog.confirm = confirm_1.confirm;
exports["default"] = Dialog;
//# sourceMappingURL=index.js.map