import { defineName } from "../utils/name";
import { Children } from "react";
import "./index.css";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("space"),
    prefix = _defineName[0];

var Space = function Space(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction;
  var mCls = classNames([prefix], (_classNames = {}, _classNames[prefix + "-" + direction] = true, _classNames[prefix + "-wrap"] = wrap, _classNames));
  var mChildren = Children.toArray(children).map(function (it) {
    return /*#__PURE__*/_jsx("div", {
      className: prefix + "-item",
      children: it
    });
  });
  return /*#__PURE__*/_jsx("div", {
    className: mCls,
    children: mChildren
  });
};

export default Space;