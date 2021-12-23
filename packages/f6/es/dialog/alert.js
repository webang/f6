import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _extends from "@babel/runtime/helpers/esm/extends";
import { show } from "./show";
export function alert(props) {
  return new Promise(function (resolve, _) {
    return show(_extends({}, props, {
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