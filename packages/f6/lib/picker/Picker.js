"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var name_1 = require("../utils/name");
var PickerColumn_1 = (0, tslib_1.__importDefault)(require("./PickerColumn"));
var prefix = (0, name_1.defineName)('picker')[0];
var Picker = function (_a, ref) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.cascade, cascade = _c === void 0 ? false : _c, _d = _a.maxLength, maxLength = _d === void 0 ? 3 : _d, optionRender = _a.optionRender, defaultIndex = _a.defaultIndex, onChange = _a.onChange;
    var _e = (0, react_1.useState)([]), mColumns = _e[0], setMColumns = _e[1];
    var childrenRef = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(function () {
        setMColumns(columns);
    }, []);
    var slideTo = function (columnIndex, columnValue, animation) {
        if (animation === void 0) { animation = true; }
        var children = childrenRef.current;
        var child = children[columnIndex];
        child.slideTo(columnValue, animation);
    };
    // 设置所有选项
    var setOptions = function (columns) {
        var children = childrenRef.current;
        setMColumns(columns);
        columns.forEach(function (it, index) {
            children[index].setOptions(it);
        });
    };
    // 获取所有选项
    var getOptions = function () {
        var children = childrenRef.current;
        return children.map(function (it) { return it.getOptions(); });
    };
    // 设置某列的选项
    var setColumnOptions = function (index, options) {
        var children = childrenRef.current;
        children[index].setOptions(options);
    };
    // 获取某列的选项
    var getColumnOptions = function (columnIndex) {
        var children = childrenRef.current;
        return children[columnIndex].getOptions();
    };
    // 设置每一列选中项索引
    var setIndex = function (list) {
        var children = childrenRef.current;
        children.forEach(function (it, index) {
            it.slideTo(list[index], false);
        });
    };
    // 获取每一列选中项索引
    var getIndex = function () {
        var children = childrenRef.current;
        return children.map(function (it) { return it.getIndex(); });
    };
    // 设置指定列的选中项索引
    var setColumnIndex = function (index, value) {
        var children = childrenRef.current;
        children[index].slideTo(value, false);
    };
    // 获取指定列的选中项索引
    var getColumnIndex = function (index) {
        var children = childrenRef.current;
        return children[index].getIndex();
    };
    // 获取选中的值
    var getValues = function () {
        var children = childrenRef.current;
        return children.map(function (it) { return it.getValue(); });
    };
    var context = {
        slideTo: slideTo,
        setOptions: setOptions,
        getOptions: getOptions,
        setColumnOptions: setColumnOptions,
        getColumnOptions: getColumnOptions,
        setIndex: setIndex,
        getIndex: getIndex,
        setColumnIndex: setColumnIndex,
        getColumnIndex: getColumnIndex,
        getValues: getValues
    };
    (0, react_1.useImperativeHandle)(ref, function () { return context; });
    var mOnChange = function (index, value, columns, pickerColumn) {
        var _a, _b;
        var list = ((_a = columns[value]) === null || _a === void 0 ? void 0 : _a.children) || [];
        if (cascade) {
            for (var i = index + 1; i < maxLength; i++) {
                childrenRef.current[i].setOptions(list);
                childrenRef.current[i].slideTo(0, false);
                list = ((_b = list[0]) === null || _b === void 0 ? void 0 : _b.children) || [];
            }
        }
        onChange && onChange(index, value, columns, context);
    };
    var renderColumns = function () {
        return mColumns.map(function (it, index) {
            return ((0, jsx_runtime_1.jsx)(PickerColumn_1["default"], { onMounted: function (child, index) {
                    var children = childrenRef.current;
                    children[index] = child;
                }, onDestroyed: function (_, index) {
                    var children = childrenRef.current;
                    children.splice(index, 1);
                }, optionRender: optionRender, onChange: mOnChange, index: index, columns: it, defaultIndex: defaultIndex ? defaultIndex[index] : 0 }, index));
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-columns") }, { children: renderColumns() }), void 0));
};
exports["default"] = (0, react_1.forwardRef)(Picker);
//# sourceMappingURL=Picker.js.map