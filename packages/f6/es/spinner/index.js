import _extends from "@babel/runtime/helpers/esm/extends";
import classNames from "classnames";
import { defineName } from "../utils/name";
import "./index.css";
import SpinnerLines from "./spinner-lines";
import OvalSpinner from "./spinner-oval";
import SpinnerCrescent from "./spinner-crescent"; // 1. 月牙形 crescent
// 2. 椭圆形 oval
// 3. 线性  lines

import { jsx as _jsx } from "react/jsx-runtime";

var Spinner = function Spinner(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "crescent" : _ref$type,
      className = _ref.className,
      style = _ref.style,
      size = _ref.size;

  var _defineName = defineName("spinner"),
      prefix = _defineName[0];

  var mCls = classNames([prefix, prefix + "--" + type, className], {});

  var mStyle = _extends({}, style || {});

  var unitValue = typeof size === "number" ? size + "px" : size;

  if (size) {
    _extends(mStyle, {
      width: unitValue,
      height: unitValue
    });
  }

  switch (type) {
    case "oval":
      {
        return /*#__PURE__*/_jsx(OvalSpinner, {
          style: mStyle,
          className: mCls
        });
      }

    case "lines":
      {
        return /*#__PURE__*/_jsx(SpinnerLines, {
          style: mStyle,
          className: mCls
        });
      }

    case "crescent":
      return /*#__PURE__*/_jsx(SpinnerCrescent, {
        style: mStyle,
        className: mCls
      });
  }
};

export default Spinner;