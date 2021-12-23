"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _classnames = _interopRequireDefault(require("classnames"));

var _context = require("./context");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)('check-list-item'),
    prefix = _defineName[0];

var CheckListItem = function CheckListItem(p) {
  var _classNames;

  var children = p.children,
      value = p.value,
      disabled = p.disabled,
      onClick = p.onClick,
      renderIcon = p.renderIcon;
  var context = (0, _react.useContext)(_context.CheckListContext);
  if (!context) return null;
  var isChecked = (context == null ? void 0 : context.value.includes(value)) || false;

  var handleClick = function handleClick() {
    if (disabled) return;
    onClick == null ? void 0 : onClick();

    if (isChecked) {
      context.uncheck(value);
    } else {
      context.check(value);
    }
  };

  var mRenderIcon = function mRenderIcon() {
    if (renderIcon) {
      return renderIcon(isChecked);
    }

    if (context.renderIcon) {
      return context.renderIcon(isChecked);
    }

    if (isChecked) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "success3",
        style: {
          fontSize: 14
        }
      });
    }
  };

  var mCls = (0, _classnames["default"])([prefix, 'hairline-bottom'], (_classNames = {}, _classNames[prefix + "--disabled"] = disabled, _classNames[prefix + "--label-" + context.labelPosition] = true, _classNames));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    onClick: handleClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__icon",
      children: mRenderIcon()
    })]
  });
};

var _default = CheckListItem;
exports["default"] = _default;