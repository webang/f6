"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _classnames = _interopRequireDefault(require("classnames"));

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("cascader-view"),
    prefix = _defineName[0];

var CascaderView = function CascaderView(props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _onClick = props.onClick,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      value = props.value;

  var renderItem = function renderItem(it, index) {
    var _classNames, _classNames2;

    var isChecked = value === it;
    var itemCls = (0, _classnames["default"])((_classNames = {}, _classNames['hairline'] = true, _classNames['border-b'] = true, _classNames[prefix + "-option"] = true, _classNames[prefix + "-selected"] = isChecked, _classNames));
    var labelCls = (0, _classnames["default"])((_classNames2 = {}, _classNames2[prefix + "-label"] = true, _classNames2[prefix + "-label-selected"] = isChecked, _classNames2));
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: function onClick() {
        return _onClick == null ? void 0 : _onClick(it);
      },
      className: itemCls,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: labelCls,
        children: it.label
      }), isChecked && /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        className: prefix + "-option-icon",
        name: "success3"
      })]
    }, index);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    style: style,
    children: options.map(function (it, index) {
      return renderItem(it, index);
    })
  });
};

var _default = CascaderView;
exports["default"] = _default;