"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = alert;

var _show = require("./show");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function alert(props) {
  return new Promise(function (resolve, _) {
    return (0, _show.show)(_extends({}, props, {
      showCancelButton: false,
      showConfirmButton: true,
      appear: true,
      onOk: function () {
        var _onOk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return props.onOk == null ? void 0 : props.onOk();

                case 2:
                  _context.t0 = _context.sent;

                  if (_context.t0) {
                    _context.next = 5;
                    break;
                  }

                  _context.t0 = "ok";

                case 5:
                  result = _context.t0;
                  resolve(result);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onOk() {
          return _onOk.apply(this, arguments);
        }

        return onOk;
      }()
    }));
  });
}