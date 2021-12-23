import classNames from "classnames";
import { usePropsValue } from "../utils/useValue";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("switch"),
    prefix = _defineName[0];

var Switch = function Switch(_ref) {
  var _classNames, _classNames2;

  var value = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? false : _ref$defaultValue,
      disabled = _ref.disabled,
      onChange = _ref.onChange;

  var _usePropsValue = usePropsValue({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange
  }),
      checked = _usePropsValue[0],
      setChecked = _usePropsValue[1];

  var handleClick = function handleClick() {
    if (!disabled) {
      setChecked(!checked);
    }
  };

  return /*#__PURE__*/_jsx("div", {
    className: classNames(prefix, (_classNames = {}, _classNames[prefix + "--on"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames)),
    onClick: handleClick,
    children: /*#__PURE__*/_jsx("div", {
      className: classNames(prefix + "-node", (_classNames2 = {}, _classNames2[prefix + "-node--on"] = checked, _classNames2))
    })
  });
};

export default Switch;