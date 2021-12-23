import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "columnNum", "border"],
    _excluded2 = ["className", "children", "icon", "text"];
import { defineName } from "../utils/name";
import React, { cloneElement } from "react";
import classNames from "classnames";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$columnNum = _ref.columnNum,
      columnNum = _ref$columnNum === void 0 ? 4 : _ref$columnNum,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? true : _ref$border,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _defineName = defineName('grid'),
      prefix = _defineName[0];

  var mCls = classNames([prefix, className]); // 过滤飞 GridItem 节点

  var gridChildren = React.Children.toArray(children).filter(function (it) {
    return it && it.type === GridItem;
  });
  var mColumnNum = Math.min(columnNum, gridChildren.length);
  var mChildren = gridChildren.map(function (child, index, array) {
    var style = _extends({}, child.props.style || {}, {
      flexBasis: 1 / mColumnNum * 100 + "%"
    });

    return /*#__PURE__*/cloneElement(child, {
      index: index,
      style: style,
      border: border
    });
  });
  return /*#__PURE__*/_jsx("div", _extends({
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

  var _defineName2 = defineName('grid-item'),
      prefix = _defineName2[0];

  var mCls = classNames([prefix, className], (_classNames = {
    hairline: restProps['border']
  }, _classNames['border-b'] = restProps['border'], _classNames['border-r'] = restProps['border'], _classNames));
  return /*#__PURE__*/_jsx("div", _extends({
    className: mCls
  }, restProps, {
    children: /*#__PURE__*/_jsxs("div", {
      className: prefix + "__body",
      children: [/*#__PURE__*/_jsx("span", {
        className: prefix + "__icon",
        children: icon
      }), /*#__PURE__*/_jsx("span", {
        className: prefix + "__text",
        children: text
      })]
    })
  }));
};

Grid.Item = GridItem;
export default Grid;