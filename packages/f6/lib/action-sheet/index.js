"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

require("./index.css");

var _classnames = _interopRequireDefault(require("classnames"));

var _popup = _interopRequireDefault(require("../popup"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("action-sheet"),
    prefix = _defineName[0];

var ActionSheet = function ActionSheet(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      visible = _ref.visible,
      callback = _ref.callback,
      title = _ref.title,
      _ref$borderRadiusSize = _ref.borderRadiusSize,
      borderRadiusSize = _ref$borderRadiusSize === void 0 ? 12 : _ref$borderRadiusSize,
      onClose = _ref.onClose,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "cancel" : _ref$cancelText;

  var renderAction = function renderAction(it, index) {
    var content = typeof it.render === "function" ? it.render() : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "-item-name",
        children: it.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "-item-desc",
        children: it.desc
      })]
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return callback == null ? void 0 : callback(index);
      },
      className: (0, _classnames["default"])([prefix + "-item", "hairline-bottom", prefix + "-action"]),
      children: content
    }, index);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_popup["default"], {
    style: {
      borderTopLeftRadius: borderRadiusSize,
      borderTopRightRadius: borderRadiusSize
    },
    visible: visible,
    position: "bottom",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])([className, prefix]),
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])([prefix + "-title", "hairline-bottom"]),
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "-items",
        children: actions == null ? void 0 : actions.map(renderAction)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])([prefix + "-gap"])
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])([prefix + "-item", prefix + "-action"]),
        onClick: function onClick() {
          return onClose == null ? void 0 : onClose();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "-item-name",
          children: cancelText
        })
      })]
    })
  });
};

var _default = ActionSheet;
exports["default"] = _default;