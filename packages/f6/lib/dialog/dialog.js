"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _overlay = _interopRequireDefault(require("../overlay"));

var _button = _interopRequireDefault(require("../button"));

var _name = require("../utils/name");

require("./index.css");

var _transition = _interopRequireDefault(require("../transition"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _defineName = (0, _name.defineName)("dialog"),
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
  var initRef = (0, _react.useRef)({
    state: false
  });
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_overlay["default"], {
      visible: visible,
      timeout: animationDuration + 100
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_transition["default"], {
      type: "f6-scale-fade",
      appear: appear,
      "in": visible,
      timeout: animationDuration,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: prefix,
        style: {
          transitionDuration: animationDuration + "ms"
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "__header",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "__content",
          children: content
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])([prefix + "__footer", "hairline"]),
          children: [showCancelButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            className: "hairline",
            onClick: cancelHandler,
            children: cancelText
          }), showConfirmButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
            className: "hairline",
            onClick: okHandler,
            children: okText
          })]
        })]
      })
    })]
  });
};

var _default = Dialog;
exports["default"] = _default;