"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
var dialog_1 = (0, tslib_1.__importDefault)(require("./dialog"));
require("./index.less");
var Dialog = dialog_1["default"];
function createDialog(props, type) {
    var container = document.createElement('div');
    var mountNode = document.body;
    var afterClose = function () {
        mountNode.removeChild(container);
    };
    var element = ((0, jsx_runtime_1.jsx)(dialog_1["default"], (0, tslib_1.__assign)({}, props, { visible: true, afterClose: afterClose }), void 0));
    mountNode.appendChild(container);
    react_dom_1["default"].render(element, container);
}
Dialog.confirm = function (params) {
    createDialog((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { showCancelButton: true, showConfirmButton: true, appear: true }), 'confirm');
};
Dialog.alert = function (params) {
    createDialog((0, tslib_1.__assign)((0, tslib_1.__assign)({}, params), { showCancelButton: false, showConfirmButton: true, appear: true }), 'alert');
};
exports["default"] = Dialog;
//# sourceMappingURL=index.js.map