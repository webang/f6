import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type", "placeholder", "clearable", "rules", "immediateCheck", "onFocus", "onChange", "onBlur", "validateOnBlur", "validateOnChange", "resetErrorOnClear"];
import { defineName } from "../utils/name";
import { useEffect, useRef, useState } from "react";
import Icon from "f6-icons";
import { usePropsValue } from "../utils/useValue";
import "./index.css";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("input"),
    prefix = _defineName[0];

var Input = function Input(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? "text" : _props$type,
      placeholder = props.placeholder,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? true : _props$clearable,
      _props$rules = props.rules,
      rules = _props$rules === void 0 ? [] : _props$rules,
      immediateCheck = props.immediateCheck,
      onFocus = props.onFocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      _props$validateOnBlur = props.validateOnBlur,
      validateOnBlur = _props$validateOnBlur === void 0 ? true : _props$validateOnBlur,
      _props$validateOnChan = props.validateOnChange,
      validateOnChange = _props$validateOnChan === void 0 ? true : _props$validateOnChan,
      _props$resetErrorOnCl = props.resetErrorOnClear,
      resetErrorOnClear = _props$resetErrorOnCl === void 0 ? true : _props$resetErrorOnCl,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var _usePropsValue = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue || ""
  }),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  var _useState = useState(""),
      error = _useState[0],
      setError = _useState[1];

  var ref = useRef(null);
  useEffect(function () {
    if (immediateCheck) {
      doCheck(value);
    }
  }, [immediateCheck]);

  var mSetValue = function mSetValue(val) {
    setValue(val);
    onChange == null ? void 0 : onChange(val);

    if (validateOnChange) {
      doCheck(val);
    }

    if (resetErrorOnClear && val.length === 0) {
      setError("");
    }
  };

  var handleChange = function handleChange(e) {
    var nVal = e.target.value;
    mSetValue(nVal);
  };

  var handleFocus = function handleFocus(e) {
    onFocus == null ? void 0 : onFocus();
  };

  var blurHandle = function blurHandle() {
    onBlur == null ? void 0 : onBlur();

    if (validateOnBlur) {
      doCheck(value);
    }
  };

  var doCheck = function doCheck(val) {
    var rule = rules.find(function (it) {
      return it.test(val);
    });
    setError(rule ? rule.message : "");
  };

  var clearVal = function clearVal() {
    var _ref$current;

    mSetValue("");
    (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
  };

  var renderIcon = function renderIcon() {
    return clearable && !restProps.disabled && !restProps.readOnly && value.length ? /*#__PURE__*/_jsx(Icon, {
      className: prefix + "__clear",
      name: "close-circle-o",
      onClick: clearVal
    }) : null;
  };

  var renderInput = function renderInput() {
    var _classNames;

    return /*#__PURE__*/_jsxs("div", {
      className: classNames((_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "--disabled"] = restProps.disabled, _classNames[prefix + "--readonly"] = restProps.readOnly, _classNames)),
      children: [/*#__PURE__*/_jsxs("div", {
        className: prefix + "__body",
        children: [/*#__PURE__*/_jsx("input", _extends({}, restProps, {
          ref: ref,
          className: prefix + "__input",
          value: value,
          type: type,
          placeholder: placeholder,
          onFocus: handleFocus,
          onBlur: blurHandle,
          onChange: handleChange
        })), renderIcon()]
      }), error && /*#__PURE__*/_jsx("div", {
        className: prefix + "__error",
        children: error
      })]
    });
  };

  return renderInput();
};

export default Input;