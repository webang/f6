"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

require("./index.css");

var _iconKeyboard = _interopRequireDefault(require("./icon-keyboard"));

var _iconDelete = _interopRequireDefault(require("./icon-delete"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("number-keyboard"),
    prefix = _defineName[0];

var NumberKeyboard = function NumberKeyboard(_ref) {
  var visible = _ref.visible,
      onInput = _ref.onInput;

  var renderItem = function renderItem(i, _onClick) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__unit",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__box",
        onClick: function onClick() {
          return _onClick == null ? void 0 : _onClick();
        },
        children: i
      })
    });
  };

  var renderGrids = function renderGrids() {
    var list = new Array(9).fill(0);
    list = list.map(function (_, i) {
      return renderItem(i + 1, function () {
        onInput == null ? void 0 : onInput("input", i + 1);
      });
    });
    return list;
  };

  if (!visible) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "" + prefix,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__units",
      children: [renderGrids(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__unit",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "__box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconKeyboard["default"], {
            onClick: function onClick() {
              onInput == null ? void 0 : onInput("close");
            },
            className: prefix + "__keyboard-icon"
          })
        })
      }), renderItem(0, function () {
        onInput == null ? void 0 : onInput('input', 0);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__unit",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "__box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconDelete["default"], {
            onClick: function onClick() {
              onInput == null ? void 0 : onInput("delete");
            },
            className: prefix + "__delete-icon"
          })
        })
      })]
    })
  });
};

var _default = NumberKeyboard;
exports["default"] = _default;