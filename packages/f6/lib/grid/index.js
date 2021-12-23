"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "children", "columnNum", "border"],
    _excluded2 = ["className", "children", "icon", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$columnNum = _ref.columnNum,
      columnNum = _ref$columnNum === void 0 ? 4 : _ref$columnNum,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? true : _ref$border,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _defineName = (0, _name.defineName)('grid'),
      prefix = _defineName[0];

  var mCls = (0, _classnames["default"])([prefix, className]); // 过滤飞 GridItem 节点

  var gridChildren = _react["default"].Children.toArray(children).filter(function (it) {
    return it && it.type === GridItem;
  });

  var mColumnNum = Math.min(columnNum, gridChildren.length);
  var mChildren = gridChildren.map(function (child, index, array) {
    var style = _extends({}, child.props.style || {}, {
      flexBasis: 1 / mColumnNum * 100 + "%"
    });

    return /*#__PURE__*/(0, _react.cloneElement)(child, {
      index: index,
      style: style,
      border: border
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _extends({
    className: mCls
  }, restProps, {
    children: mChildren
  }));
};

var GridItem = function GridItem(props) {
  var _classNames;

  var className = props.className,
      children = props.children,
      icon = props.icon,
      text = props.text,
      restProps = _objectWithoutPropertiesLoose(props, _excluded2);

  var _defineName2 = (0, _name.defineName)('grid-item'),
      prefix = _defineName2[0];

  var mCls = (0, _classnames["default"])([prefix, className], (_classNames = {
    hairline: restProps['border']
  }, _classNames['border-b'] = restProps['border'], _classNames['border-r'] = restProps['border'], _classNames));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _extends({
    className: mCls
  }, restProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__body",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: prefix + "__icon",
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: prefix + "__text",
        children: text
      })]
    })
  }));
};

Grid.Item = GridItem;
var _default = Grid;
exports["default"] = _default;