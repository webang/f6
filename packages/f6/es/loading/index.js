import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["vertical", "spinnerType", "spinnerSize", "className", "children", "message"];
import classNames from "classnames";
import React from "react";
import { defineName } from "../utils/name";
import "./index.css";
import Spinner from '../spinner';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Loading = function Loading(_ref) {
  var _classNames;

  var _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$spinnerType = _ref.spinnerType,
      spinnerType = _ref$spinnerType === void 0 ? 'crescent' : _ref$spinnerType,
      _ref$spinnerSize = _ref.spinnerSize,
      spinnerSize = _ref$spinnerSize === void 0 ? '24' : _ref$spinnerSize,
      className = _ref.className,
      children = _ref.children,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Loading' : _ref$message,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _defineName = defineName("loading"),
      prefix = _defineName[0];

  var mCls = classNames([prefix, className], (_classNames = {}, _classNames[prefix + "--vertical"] = vertical, _classNames));
  return /*#__PURE__*/_jsxs("div", _extends({
    className: mCls
  }, restProps, {
    children: [/*#__PURE__*/_jsx(Spinner, {
      className: prefix + "__icon",
      type: spinnerType,
      size: spinnerSize
    }), /*#__PURE__*/_jsx("div", {
      className: prefix + "__text",
      children: children || message
    })]
  }));
};

export default Loading;