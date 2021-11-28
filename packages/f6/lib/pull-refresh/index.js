"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./index.less");
function loadData(len, start) {
    if (start === void 0) { start = 0; }
    return (new Array(len).fill(0)).map(function (_, index) {
        return {
            label: "".concat(start + index, " \u54C8\u54C8")
        };
    });
}
var PullRefresh = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({
        hasMore: true,
        list: loadData(20)
    }), state = _b[0], setState = _b[1];
    var renderItem = function () {
        return state.list.map(function (it) { return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { lineHeight: "40px", paddingLeft: 12, borderBottom: '1px solid #f5f5f5' } }, { children: it.label }), void 0)); });
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-pull-refresh" }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-pull-refresh-container" }, { children: renderItem() }), void 0) }), void 0));
};
exports["default"] = PullRefresh;
//# sourceMappingURL=index.js.map