"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

require("./iconfont/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = ({
  name,
  className,
  onClick,
  ...restProps
}) => {
  const cls = `wax-icon yus-icon yus-icon-${name} ${className}`;

  const handleClick = () => onClick === null || onClick === void 0 ? void 0 : onClick();

  return (0, _jsxRuntime.jsx)("span", {
    onClick: handleClick,
    className: cls,
    ...restProps
  }, void 0);
};

var _default = Icon;
exports.default = _default;