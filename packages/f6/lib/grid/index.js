"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = (0, tslib_1.__importStar)(require("react"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
require("./index.less");
var Grid = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.columnNum, columnNum = _b === void 0 ? 4 : _b, _c = _a.border, border = _c === void 0 ? true : _c, restProps = (0, tslib_1.__rest)(_a, ["className", "children", "columnNum", "border"]);
    var prefix = (0, name_1.defineName)('grid')[0];
    var mCls = (0, classnames_1["default"])([prefix, className]);
    // 过滤飞 GridItem 节点
    var gridChildren = react_1["default"].Children
        .toArray(children)
        .filter(function (it) {
        return it && it.type === GridItem;
    });
    var mColumnNum = Math.min(columnNum, gridChildren.length);
    var mChildren = gridChildren.map(function (child, index, array) {
        var style = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, (child.props.style || {})), { flexBasis: "".concat((1 / mColumnNum) * 100, "%") });
        return (0, react_1.cloneElement)(child, { index: index, style: style, border: border });
    });
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls }, restProps, { children: mChildren }), void 0));
};
var GridItem = function (props) {
    var _a;
    var className = props.className, children = props.children, icon = props.icon, text = props.text, restProps = (0, tslib_1.__rest)(props, ["className", "children", "icon", "text"]);
    var prefix = (0, name_1.defineName)('grid-item')[0];
    var mCls = (0, classnames_1["default"])([prefix, className], (_a = {
            hairline: restProps['border']
        },
        _a['border-b'] = restProps['border'],
        _a['border-r'] = restProps['border'],
        _a));
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls }, restProps, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body") }, { children: [(0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: icon }), void 0), (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__text") }, { children: text }), void 0)] }), void 0) }), void 0));
};
Grid.Item = GridItem;
exports["default"] = Grid;
//# sourceMappingURL=index.js.map