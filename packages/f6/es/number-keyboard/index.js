import { defineName } from "../utils/name";
import "./index.css";
import IconKeyboard from "./icon-keyboard";
import IconDelete from "./icon-delete";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("number-keyboard"),
    prefix = _defineName[0];

var NumberKeyboard = function NumberKeyboard(_ref) {
  var visible = _ref.visible,
      onInput = _ref.onInput;

  var renderItem = function renderItem(i, _onClick) {
    return /*#__PURE__*/_jsx("div", {
      className: prefix + "__unit",
      children: /*#__PURE__*/_jsx("div", {
        className: prefix + "__box",
        onClick: function onClick() {
          return _onClick == null ? void 0 : _onClick();
        },
        children: i
      })
    });
  };

  var renderGrids = function renderGrids() {
    var list = new Array(9).fill(0);
    list = list.map(function (_, i) {
      return renderItem(i + 1, function () {
        onInput == null ? void 0 : onInput("input", i + 1);
      });
    });
    return list;
  };

  if (!visible) return null;
  return /*#__PURE__*/_jsx("div", {
    className: "" + prefix,
    children: /*#__PURE__*/_jsxs("div", {
      className: prefix + "__units",
      children: [renderGrids(), /*#__PURE__*/_jsx("div", {
        className: prefix + "__unit",
        children: /*#__PURE__*/_jsx("div", {
          className: prefix + "__box",
          children: /*#__PURE__*/_jsx(IconKeyboard, {
            onClick: function onClick() {
              onInput == null ? void 0 : onInput("close");
            },
            className: prefix + "__keyboard-icon"
          })
        })
      }), renderItem(0, function () {
        onInput == null ? void 0 : onInput('input', 0);
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "__unit",
        children: /*#__PURE__*/_jsx("div", {
          className: prefix + "__box",
          children: /*#__PURE__*/_jsx(IconDelete, {
            onClick: function onClick() {
              onInput == null ? void 0 : onInput("delete");
            },
            className: prefix + "__delete-icon"
          })
        })
      })]
    })
  });
};

export default NumberKeyboard;