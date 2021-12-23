import { defineName } from "../utils/name";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName('swipe-item'),
    prefix = _defineName[0];

var SwipeItem = function SwipeItem(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    children: children
  });
};

export default SwipeItem;