"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

require("./index.css");

var _classnames = _interopRequireDefault(require("classnames"));

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "type", "children", "icon", "link"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)('message'),
    prefix = _defineName[0];

var Message = function Message(_ref) {
  var _classNames;

  var className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      children = _ref.children,
      icon = _ref.icon,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? false : _ref$link,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var mCls = (0, _classnames["default"])([prefix, prefix + "--" + type, className], (_classNames = {}, _classNames[prefix + "--link"] = link, _classNames));

  var renderIcon = function renderIcon() {
    if (icon) return icon;

    switch (type) {
      case "success":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          name: "success",
          style: {
            fontSize: '18px'
          }
        });

      case "danger":
      case "primary":
      case "warning":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          name: "error"
        });
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _extends({
    className: mCls
  }, restProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: prefix + "__icon",
      children: [" ", renderIcon(), " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__body",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), link && /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        className: prefix + "__link",
        name: "arrow-right"
      })]
    })]
  }));
};

var _default = Message;
exports["default"] = _default;