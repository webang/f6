import { defineName } from "../utils/name";
import classNames from "classnames";
import Icon from "f6-icons";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("cascader-view"),
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
    var itemCls = classNames((_classNames = {}, _classNames['hairline'] = true, _classNames['border-b'] = true, _classNames[prefix + "-option"] = true, _classNames[prefix + "-selected"] = isChecked, _classNames));
    var labelCls = classNames((_classNames2 = {}, _classNames2[prefix + "-label"] = true, _classNames2[prefix + "-label-selected"] = isChecked, _classNames2));
    return /*#__PURE__*/_jsxs("div", {
      onClick: function onClick() {
        return _onClick == null ? void 0 : _onClick(it);
      },
      className: itemCls,
      children: [/*#__PURE__*/_jsx("div", {
        className: labelCls,
        children: it.label
      }), isChecked && /*#__PURE__*/_jsx(Icon, {
        className: prefix + "-option-icon",
        name: "success3"
      })]
    }, index);
  };

  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    style: style,
    children: options.map(function (it, index) {
      return renderItem(it, index);
    })
  });
};

export default CascaderView;