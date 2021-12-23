"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var IconKeyboard = function IconKeyboard(_ref) {
  var className = _ref.className,
      _onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    className: className,
    viewBox: "0 0 32 22",
    onClick: function onClick() {
      return _onClick == null ? void 0 : _onClick();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
      fill: "currentColor"
    })
  });
};

var _default = IconKeyboard;
exports["default"] = _default;