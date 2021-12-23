import _extends from "@babel/runtime/helpers/extends";
import { usePropsValue } from "../utils/useValue";
import { CheckListContext } from "./context";
import { defineName } from "../utils/name";
import { jsx as _jsx } from "react/jsx-runtime";
var defaultProps = {
  multiple: false,
  defaultValue: [],
  labelPosition: 'left'
};

var _defineName = defineName('check-list'),
    prefix = _defineName[0];

var CheckList = function CheckList(p) {
  var props = _extends({}, defaultProps, p);

  var children = props.children,
      multiple = props.multiple,
      renderIcon = props.renderIcon,
      labelPosition = props.labelPosition;

  var _usePropsValue = usePropsValue(props),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  var check = function check(val) {
    if (multiple) {
      setValue([].concat(value, [val]));
    } else {
      setValue([val]);
    }
  };

  var uncheck = function uncheck(val) {
    if (multiple) {
      setValue(value.filter(function (it) {
        return it !== val;
      }));
    } else {
      setValue([]);
    }
  };

  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    children: /*#__PURE__*/_jsx(CheckListContext.Provider, {
      value: {
        value: value,
        check: check,
        uncheck: uncheck,
        renderIcon: renderIcon,
        labelPosition: labelPosition
      },
      children: children
    })
  });
};

export default CheckList;