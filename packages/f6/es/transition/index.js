import { CSSTransition } from "react-transition-group";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var Transition = function Transition(_ref) {
  var type = _ref.type,
      _in = _ref["in"],
      timeout = _ref.timeout,
      children = _ref.children,
      _ref$appear = _ref.appear,
      appear = _ref$appear === void 0 ? false : _ref$appear;
  return /*#__PURE__*/_jsx(CSSTransition, {
    classNames: type,
    "in": _in,
    unmountOnExit: true,
    appear: appear,
    timeout: timeout,
    children: children
  });
};

export default Transition;