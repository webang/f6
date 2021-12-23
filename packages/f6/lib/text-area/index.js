"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _useValue = require("../utils/useValue");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["placeholder", "clearable", "rules", "immediateCheck", "onFocus", "onChange", "onBlur", "validateOnBlur", "validateOnChange", "resetErrorOnClear", "showCount", "autoSize"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)("textarea"),
    prefix = _defineName[0];

var TextArea = function TextArea(props) {
  var placeholder = props.placeholder,
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
      _props$showCount = props.showCount,
      showCount = _props$showCount === void 0 ? true : _props$showCount,
      _props$autoSize = props.autoSize,
      autoSize = _props$autoSize === void 0 ? false : _props$autoSize,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var _usePropsValue = (0, _useValue.usePropsValue)({
    value: props.value,
    defaultValue: props.defaultValue || ""
  }),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  var _useState = (0, _react.useState)(""),
      error = _useState[0],
      setError = _useState[1];

  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
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

  (0, _react.useEffect)(function () {
    if (!ref.current) return;
    if (!autoSize) return;
    var textArea = ref.current;
    textArea.style.height = "auto";
    var height = textArea.scrollHeight;
    textArea.style.height = height + "px";
  }, [value]);

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
    return clearable && !restProps.disabled && !restProps.readOnly && value.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
      className: prefix + "__clear",
      name: "close-circle-o",
      onClick: clearVal
    }) : null;
  };

  var renderInput = function renderInput() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])([prefix]),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: prefix + "__body",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", _extends({}, restProps, {
          ref: ref,
          className: prefix + "__input",
          value: value,
          placeholder: placeholder,
          onFocus: handleFocus,
          onBlur: blurHandle,
          onChange: handleChange
        })), renderIcon()]
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__error",
        children: error
      }), value.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__count",
        children: value.length
      }) : null]
    });
  };

  return renderInput();
};

var _default = TextArea;
exports["default"] = _default;