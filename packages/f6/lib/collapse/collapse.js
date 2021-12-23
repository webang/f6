"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _collapseContext = require("./collapse-context");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)('collapse'),
    prefix = _defineName[0];

var Collapse = function Collapse(p) {
  var className = p.className,
      multiple = p.multiple,
      children = p.children,
      defaultOpenKeys = p.defaultOpenKeys;
  var mCls = (0, _classnames["default"])([className, prefix]);

  var _useState = (0, _react.useState)(defaultOpenKeys ? defaultOpenKeys : []),
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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: mCls,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_collapseContext.CollapseContext.Provider, {
      value: {
        openKeys: openKeys,
        check: check,
        uncheck: uncheck
      },
      children: children
    })
  });
};

var _default = Collapse;
exports["default"] = _default;