"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _name = require("../utils/name");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _defineName = (0, _name.defineName)("tab"),
    prefix = _defineName[0];

var Tab = function Tab(_ref) {
  var children = _ref.children,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue;

  var _useState = (0, _react.useState)(defaultValue),
      current = _useState[0],
      setCurrent = _useState[1];

  var list = children;

  var renderContent = function renderContent() {};

  var renderTabs = function renderTabs() {
    return list.map(function (it, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wax-tab-item",
        onClick: function onClick() {
          setCurrent(index);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: it.props.title
        })
      });
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "wax-tab__wrap",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wax-tab__list",
        children: renderTabs()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wax-tab__line",
        style: {
          left: current / list.length * 100 + "%"
        }
      })]
    })
  });
};

var itemPrefix = prefix + "-item";

var TabItem = function TabItem(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "" : _ref2$title;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: itemPrefix,
    children: title
  });
};

Tab.TabItem = TabItem;
var _default = Tab;
exports["default"] = _default;