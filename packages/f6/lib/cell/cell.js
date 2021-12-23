"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("cell"),
    prefix = _defineName[0];

var Cell = function Cell(_ref) {
  var _classNames;

  var className = _ref.className,
      title = _ref.title,
      titleClass = _ref.titleClass,
      label = _ref.label,
      value = _ref.value,
      link = _ref.link,
      onClick = _ref.onClick,
      icon = _ref.icon,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? true : _ref$border,
      _ref$bodyStyle = _ref.bodyStyle,
      bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle,
      children = _ref.children,
      _ref$titleAlign = _ref.titleAlign,
      titleAlign = _ref$titleAlign === void 0 ? "left" : _ref$titleAlign;
  var mCls = (0, _classnames["default"])([className], (_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "--link"] = link, _classNames["hairline-bottom"] = border, _classNames[prefix + "--title-" + titleAlign] = true, _classNames));

  var handleClick = function handleClick(event) {
    onClick && onClick(event);
  };

  var renderIcon = function renderIcon() {
    if (!icon) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__icon",
      children: icon
    });
  };

  var renderMain = function renderMain() {
    var cls = (0, _classnames["default"])([titleClass, prefix + "__main"]);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: cls,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: prefix + "__title",
        children: [renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: title
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__content",
        children: children
      })]
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    onClick: handleClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__head",
      children: [renderMain(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__value",
        children: value
      }), link && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: prefix + "__arrow",
        src: require("../svg/arrow_right.svg")["default"],
        alt: ""
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__body",
      style: bodyStyle,
      children: label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__label",
        children: label
      })
    })]
  });
};

var _default = Cell;
exports["default"] = _default;