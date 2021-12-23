"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;

var _react = require("react");

var _mountTo = require("../utils/mountTo");

var _2 = _interopRequireDefault(require("."));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function show(props) {
  var instanceRef = /*#__PURE__*/(0, _react.createRef)();
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
  var Wrapper = /*#__PURE__*/(0, _react.forwardRef)(function (_, ref) {
    var _useState = (0, _react.useState)(false),
        visible = _useState[0],
        setVisible = _useState[1];

    (0, _react.useEffect)(function () {
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

    (0, _react.useImperativeHandle)(ref, function () {
      return {
        close: closeHandler,
        forceClose: forceClose
      };
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_2["default"], _extends({}, props, {
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
  methods.unmount = (0, _mountTo.mountTo)( /*#__PURE__*/(0, _jsxRuntime.jsx)(Wrapper, {
    ref: instanceRef
  }));
  return {
    close: methods.close,
    forceClose: methods.forceClose
  };
}