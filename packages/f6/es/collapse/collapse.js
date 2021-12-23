import { defineName } from "../utils/name";
import { useState } from "react";
import classNames from "classnames";
import { CollapseContext } from "./collapse-context";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName('collapse'),
    prefix = _defineName[0];

var Collapse = function Collapse(p) {
  var className = p.className,
      multiple = p.multiple,
      children = p.children,
      defaultOpenKeys = p.defaultOpenKeys;
  var mCls = classNames([className, prefix]);

  var _useState = useState(defaultOpenKeys ? defaultOpenKeys : []),
      openKeys = _useState[0],
      setOpenKeys = _useState[1];

  var check = function check(val) {
    if (multiple) {
      setOpenKeys(function (prev) {
        return [].concat(prev, [val]);
      });
    } else {
      setOpenKeys([val]);
    }
  };

  var uncheck = function uncheck(val) {
    if (multiple) {
      setOpenKeys(function (prev) {
        return prev.filter(function (it) {
          return it !== val;
        });
      });
    } else {
      setOpenKeys([]);
    }
  };

  return /*#__PURE__*/_jsx("div", {
    className: mCls,
    children: /*#__PURE__*/_jsx(CollapseContext.Provider, {
      value: {
        openKeys: openKeys,
        check: check,
        uncheck: uncheck
      },
      children: children
    })
  });
};

export default Collapse;