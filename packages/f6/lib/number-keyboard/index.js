"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
require("./index.less");
var icon_keyboard_1 = (0, tslib_1.__importDefault)(require("./icon-keyboard"));
var icon_delete_1 = (0, tslib_1.__importDefault)(require("./icon-delete"));
var prefx = (0, name_1.defineName)("number-keyboard")[0];
var NumberKeyboard = function (_a) {
    var visible = _a.visible, onInput = _a.onInput;
    var renderItem = function (i, onClick) {
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__unit") }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__box"), onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); } }, { children: i }), void 0) }), void 0));
    };
    var renderNums = function () {
        var list = new Array(9).fill(0);
        list = list.map(function (_, i) {
            return renderItem(i + 1, function () {
                onInput === null || onInput === void 0 ? void 0 : onInput("input", i + 1);
            });
        });
        return list;
    };
    if (!visible)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx) }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__units") }, { children: [renderNums(), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__unit") }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__box") }, { children: (0, jsx_runtime_1.jsx)(icon_keyboard_1["default"], { onClick: function () {
                                onInput === null || onInput === void 0 ? void 0 : onInput("close");
                            }, className: "".concat(prefx, "__keyboard-icon") }, void 0) }), void 0) }), void 0), renderItem(0, function () {
                    onInput === null || onInput === void 0 ? void 0 : onInput('input', 0);
                }), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__unit") }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefx, "__box") }, { children: (0, jsx_runtime_1.jsx)(icon_delete_1["default"], { onClick: function () {
                                onInput === null || onInput === void 0 ? void 0 : onInput("delete");
                            }, className: "".concat(prefx, "__delete-icon") }, void 0) }), void 0) }), void 0)] }), void 0) }), void 0));
};
exports["default"] = NumberKeyboard;
//# sourceMappingURL=index.js.map