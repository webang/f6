"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _useValue = require("../utils/useValue");

var _name = require("../utils/name");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("switch"),
    prefix = _defineName[0];

var Switch = function Switch(_ref) {
  var _classNames, _classNames2;

  var value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? false : _ref$defaultValue,
      disabled = _ref.disabled,
      onChange = _ref.onChange;

  var _usePropsValue = (0, _useValue.usePropsValue)({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange
  }),
      checked = _usePropsValue[0],
      setChecked = _usePropsValue[1];

  var handleClick = function handleClick() {
    if (!disabled) {
      setChecked(!checked);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames["default"])(prefix, (_classNames = {}, _classNames[prefix + "--on"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames)),
    onClick: handleClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames["default"])(prefix + "-node", (_classNames2 = {}, _classNames2[prefix + "-node--on"] = checked, _classNames2))
    })
  });
};

var _default = Switch;
exports["default"] = _default;