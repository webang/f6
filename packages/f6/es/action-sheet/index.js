import { defineName } from "../utils/name";
import "./index.css";
import classNames from "classnames";
import Popup from "../popup";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("action-sheet"),
    prefix = _defineName[0];

var ActionSheet = function ActionSheet(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      visible = _ref.visible,
      callback = _ref.callback,
      title = _ref.title,
      _ref$borderRadiusSize = _ref.borderRadiusSize,
      borderRadiusSize = _ref$borderRadiusSize === void 0 ? 12 : _ref$borderRadiusSize,
      onClose = _ref.onClose,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "cancel" : _ref$cancelText;

  var renderAction = function renderAction(it, index) {
    var content = typeof it.render === "function" ? it.render() : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "-item-name",
        children: it.title
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "-item-desc",
        children: it.desc
      })]
    });
    return /*#__PURE__*/_jsx("div", {
      onClick: function onClick() {
        return callback == null ? void 0 : callback(index);
      },
      className: classNames([prefix + "-item", "hairline-bottom", prefix + "-action"]),
      children: content
    }, index);
  };

  return /*#__PURE__*/_jsx(Popup, {
    style: {
      borderTopLeftRadius: borderRadiusSize,
      borderTopRightRadius: borderRadiusSize
    },
    visible: visible,
    position: "bottom",
    children: /*#__PURE__*/_jsxs("div", {
      className: classNames([className, prefix]),
      children: [title && /*#__PURE__*/_jsx("div", {
        className: classNames([prefix + "-title", "hairline-bottom"]),
        children: title
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "-items",
        children: actions == null ? void 0 : actions.map(renderAction)
      }), /*#__PURE__*/_jsx("div", {
        className: classNames([prefix + "-gap"])
      }), /*#__PURE__*/_jsx("div", {
        className: classNames([prefix + "-item", prefix + "-action"]),
        onClick: function onClick() {
          return onClose == null ? void 0 : onClose();
        },
        children: /*#__PURE__*/_jsx("div", {
          className: prefix + "-item-name",
          children: cancelText
        })
      })]
    })
  });
};

export default ActionSheet;