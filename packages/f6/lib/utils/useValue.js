"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePropsValue = usePropsValue;

var _react = _interopRequireDefault(require("react"));

var _useUpdate = _interopRequireDefault(require("./useUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function usePropsValue(p) {
  var value = p.value,
      defaultValue = p.defaultValue,
      onChange = p.onChange;

  var stateRef = _react["default"].useRef(value !== undefined ? value : defaultValue);

  var update = (0, _useUpdate["default"])();

  if (value !== undefined) {
    stateRef.current = value;
  }

  var setState = function setState(v) {
    // const isChanged = stateRef.current !== v;
    if (value === undefined) {
      stateRef.current = v;
      update();
    }

    onChange == null ? void 0 : onChange(v);
  };

  return [stateRef.current, setState];
}