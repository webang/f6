import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className", "type", "children", "icon", "link"];
import { defineName } from "../utils/name";
import "./index.css";
import classNames from "classnames";
import Icon from "f6-icons";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName('message'),
    prefix = _defineName[0];

var Message = function Message(_ref) {
  var _classNames;

  var className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      children = _ref.children,
      icon = _ref.icon,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? false : _ref$link,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var mCls = classNames([prefix, prefix + "--" + type, className], (_classNames = {}, _classNames[prefix + "--link"] = link, _classNames));

  var renderIcon = function renderIcon() {
    if (icon) return icon;

    switch (type) {
      case "success":
        return /*#__PURE__*/_jsx(Icon, {
          name: "success",
          style: {
            fontSize: '18px'
          }
        });

      case "danger":
      case "primary":
      case "warning":
        return /*#__PURE__*/_jsx(Icon, {
          name: "error"
        });
    }
  };

  return /*#__PURE__*/_jsxs("div", _extends({
    className: mCls
  }, restProps, {
    children: [/*#__PURE__*/_jsxs("span", {
      className: prefix + "__icon",
      children: [" ", renderIcon(), " "]
    }), /*#__PURE__*/_jsxs("div", {
      className: prefix + "__body",
      children: [/*#__PURE__*/_jsx("div", {
        children: children
      }), link && /*#__PURE__*/_jsx(Icon, {
        className: prefix + "__link",
        name: "arrow-right"
      })]
    })]
  }));
};

export default Message;