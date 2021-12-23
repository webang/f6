import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import Overlay from "../overlay";
import Button from "../button";
import { defineName } from "../utils/name";
import "./index.css";
import Transition from "../transition";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var _defineName = defineName("dialog"),
    prefix = _defineName[0];

var Dialog = function Dialog(_ref) {
  var title = _ref.title,
      content = _ref.content,
      visible = _ref.visible,
      _ref$showCancelButton = _ref.showCancelButton,
      showCancelButton = _ref$showCancelButton === void 0 ? true : _ref$showCancelButton,
      _ref$showConfirmButto = _ref.showConfirmButton,
      showConfirmButton = _ref$showConfirmButto === void 0 ? true : _ref$showConfirmButto,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 250 : _ref$animationDuratio,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? "ok" : _ref$okText,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "cancel" : _ref$cancelText,
      _ref$appear = _ref.appear,
      appear = _ref$appear === void 0 ? false : _ref$appear,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? function () {
    return false;
  } : _ref$onOk,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {
    return false;
  } : _ref$onCancel,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return true;
  } : _ref$onClose,
      onClosed = _ref.onClosed;
  var initRef = useRef({
    state: false
  });
  useEffect(function () {
    if (initRef.current.state === false) {
      initRef.current.state = true;
      return;
    }

    var id = null;

    if (!visible) {
      id = setTimeout(function () {
        onClosed == null ? void 0 : onClosed();
      }, animationDuration);
    }

    return function () {
      if (id !== null) clearTimeout(id);
    };
  }, [visible]);

  var okHandler = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return onOk();

            case 2:
              onClose == null ? void 0 : onClose();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function okHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  var cancelHandler = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return onCancel();

            case 2:
              onClose == null ? void 0 : onClose();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function cancelHandler() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Overlay, {
      visible: visible,
      timeout: animationDuration + 100
    }), /*#__PURE__*/_jsx(Transition, {
      type: "f6-scale-fade",
      appear: appear,
      "in": visible,
      timeout: animationDuration,
      children: /*#__PURE__*/_jsxs("div", {
        className: prefix,
        style: {
          transitionDuration: animationDuration + "ms"
        },
        children: [title && /*#__PURE__*/_jsx("div", {
          className: prefix + "__header",
          children: title
        }), /*#__PURE__*/_jsx("div", {
          className: prefix + "__content",
          children: content
        }), /*#__PURE__*/_jsxs("div", {
          className: classNames([prefix + "__footer", "hairline"]),
          children: [showCancelButton && /*#__PURE__*/_jsx(Button, {
            className: "hairline",
            onClick: cancelHandler,
            children: cancelText
          }), showConfirmButton && /*#__PURE__*/_jsx(Button, {
            className: "hairline",
            onClick: okHandler,
            children: okText
          })]
        })]
      })
    })]
  });
};

export default Dialog;