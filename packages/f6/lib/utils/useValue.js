"use strict";
exports.__esModule = true;
exports.usePropsValue = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var useUpdate_1 = (0, tslib_1.__importDefault)(require("./useUpdate"));
function usePropsValue(p) {
    var value = p.value, defaultValue = p.defaultValue, onChange = p.onChange;
    var stateRef = react_1["default"].useRef(value !== undefined ? value : defaultValue);
    var update = (0, useUpdate_1["default"])();
    if (value !== undefined) {
        stateRef.current = value;
    }
    var setState = function (v) {
        // const isChanged = stateRef.current !== v;
        if (value === undefined) {
            stateRef.current = v;
            update();
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(v);
    };
    return [stateRef.current, setState];
}
exports.usePropsValue = usePropsValue;
//# sourceMappingURL=useValue.js.map