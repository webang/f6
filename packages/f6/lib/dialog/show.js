import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { createRef, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { mountTo } from "../utils/mountTo";
import Dialog from ".";
import { jsx as _jsx } from "react/jsx-runtime";
export function show(props) {
  var instanceRef = /*#__PURE__*/createRef();
  var methods = {
    unmount: function unmount() {},
    close: function close() {
      var _instanceRef$current;

      (_instanceRef$current = instanceRef.current) == null ? void 0 : _instanceRef$current.close();
    },
    forceClose: function forceClose() {
      var _instanceRef$current2;

      (_instanceRef$current2 = instanceRef.current) == null ? void 0 : _instanceRef$current2.forceClose();
    }
  };
  var Wrapper = /*#__PURE__*/forwardRef(function (_, ref) {
    var _useState = useState(false),
        visible = _useState[0],
        setVisible = _useState[1];

    useEffect(function () {
      return setVisible(true);
    }, []);

    function closeHandler() {
      if (props.onClose) {
        setVisible(!Boolean(props.onClose()));
        ;
      } else {
        setVisible(false);
      }
    }

    function forceClose() {
      setVisible(false);
    }

    useImperativeHandle(ref, function () {
      return {
        close: closeHandler,
        forceClose: forceClose
      };
    });
    return /*#__PURE__*/_jsx(Dialog, _extends({}, props, {
      visible: visible,
      onCancel: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.onCancel == null ? void 0 : props.onCancel();

              case 2:
                methods.close();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      onOk: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return props.onOk == null ? void 0 : props.onOk();

              case 2:
                methods.close();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })),
      onClosed: function onClosed() {
        methods.unmount();
      }
    }));
  });
  methods.unmount = mountTo( /*#__PURE__*/_jsx(Wrapper, {
    ref: instanceRef
  }));
  return {
    close: methods.close,
    forceClose: methods.forceClose
  };
}