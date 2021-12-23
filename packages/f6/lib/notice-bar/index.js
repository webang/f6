"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
require("./index.less");
var prefix = (0, name_1.defineName)("notice-bar")[0];
var NoticeBar = function (_a) {
    var text = _a.text, _b = _a.start, start = _b === void 0 ? 100 : _b, _c = _a.step, step = _c === void 0 ? 1 : _c;
    var _d = (0, react_1.useState)({
        offset: -start,
        running: true
    }), state = _d[0], setState = _d[1];
    var mRef = (0, react_1.useRef)(null);
    var oRef = (0, react_1.useRef)(null);
    var stop = function () {
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { running: !prev.running })); });
    };
    (0, react_1.useEffect)(function () {
        if (!state.running)
            return;
        if (!mRef.current)
            return;
        if (!oRef.current)
            return;
        var id = setTimeout(function () {
            setState(function (prev) {
                // const oWidth = oRef.current!.offsetWidth;
                var iWidth = mRef.current.offsetWidth;
                var isFinished = iWidth <= prev.offset;
                var offset = isFinished ? -100 : prev.offset + step;
                return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { offset: offset });
            });
        }, 25);
        return function () {
            clearTimeout(id);
        };
    });
    var style = {
        left: -state.offset
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__inner"), ref: oRef }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__content"), style: style, ref: mRef }, { children: text }), void 0) }), void 0) }), void 0));
};
exports["default"] = NoticeBar;
//# sourceMappingURL=index.js.map