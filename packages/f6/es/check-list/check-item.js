import { defineName } from '../utils/name';
import { useContext } from 'react';
import Icon from 'f6-icons';
import classNames from 'classnames';
import { CheckListContext } from './context';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName('check-list-item'),
    prefix = _defineName[0];

var CheckListItem = function CheckListItem(p) {
  var _classNames;

  var children = p.children,
      value = p.value,
      disabled = p.disabled,
      onClick = p.onClick,
      renderIcon = p.renderIcon;
  var context = useContext(CheckListContext);
  if (!context) return null;
  var isChecked = (context == null ? void 0 : context.value.includes(value)) || false;

  var handleClick = function handleClick() {
    if (disabled) return;
    onClick == null ? void 0 : onClick();

    if (isChecked) {
      context.uncheck(value);
    } else {
      context.check(value);
    }
  };

  var mRenderIcon = function mRenderIcon() {
    if (renderIcon) {
      return renderIcon(isChecked);
    }

    if (context.renderIcon) {
      return context.renderIcon(isChecked);
    }

    if (isChecked) {
      return /*#__PURE__*/_jsx(Icon, {
        name: "success3",
        style: {
          fontSize: 14
        }
      });
    }
  };

  var mCls = classNames([prefix, 'hairline-bottom'], (_classNames = {}, _classNames[prefix + "--disabled"] = disabled, _classNames[prefix + "--label-" + context.labelPosition] = true, _classNames));
  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    onClick: handleClick,
    children: [/*#__PURE__*/_jsx("div", {
      children: children
    }), /*#__PURE__*/_jsx("div", {
      className: prefix + "__icon",
      children: mRenderIcon()
    })]
  });
};

export default CheckListItem;