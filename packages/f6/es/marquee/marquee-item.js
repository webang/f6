import { defineName } from "../utils/name";
import { useContext } from "react";
import { MarqueeContext } from "./context";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("marquee-item"),
    prefix = _defineName[0];

var MarqueeItem = function MarqueeItem(_ref) {
  var children = _ref.children;
  var context = useContext(MarqueeContext);
  var height = (context == null ? void 0 : context.itemHeight) || 0;
  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    style: {
      height: height
    },
    children: children
  });
};

export default MarqueeItem;