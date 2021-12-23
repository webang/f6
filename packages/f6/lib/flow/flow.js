import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children"];
import { defineName } from "../utils/name";
import { FlowContext } from "./flow-context";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("flow"),
    prefix = _defineName[0];

var defaultProps = {
  direction: 'horizontal',
  current: 0
};

var Flow = function Flow(_ref) {
  var _classNames;

  var children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var p = _extends({}, defaultProps, restProps);

  return /*#__PURE__*/_jsx("div", {
    className: classNames([prefix], (_classNames = {}, _classNames[prefix + "--" + p.direction] = true, _classNames)),
    children: /*#__PURE__*/_jsx(FlowContext.Provider, {
      value: p,
      children: children
    })
  });
};

export default Flow;