"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _cell = _interopRequireDefault(require("../cell"));

var _react = require("react");

var _name = require("../utils/name");

var _collapseContext = require("./collapse-context");

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("collapse-item"),
    prefix = _defineName[0];

var CollapseItem = function CollapseItem(p) {
  var name = p.name,
      title = p.title,
      className = p.className,
      children = p.children;
  var mCls = (0, _classnames["default"])([className, prefix]);
  var context = (0, _react.useContext)(_collapseContext.CollapseContext);
  var contentRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    height: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var isOpen = context == null ? void 0 : context.openKeys.includes(name);

  var handleClick = function handleClick() {
    if (isOpen) {
      context == null ? void 0 : context.uncheck(name);
    } else {
      context == null ? void 0 : context.check(name);
    }
  };

  var bodyStyle = {
    height: isOpen ? state.height : 0,
    overflow: "hidden",
    transition: "all 300ms"
  };
  var iconStyle = {
    display: "inline-block",
    transform: "rotate(" + (isOpen ? 180 : 0) + "deg)",
    transition: "all 300ms"
  };
  (0, _react.useEffect)(function () {
    var _contentRef$current;

    setState({
      height: ((_contentRef$current = contentRef.current) == null ? void 0 : _contentRef$current.offsetHeight) || 0
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__head",
      onClick: handleClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_cell["default"], {
        title: title,
        value: /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          className: prefix + "__icon",
          name: "arrow-down",
          style: iconStyle
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__body",
      style: bodyStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__content",
        ref: contentRef,
        children: children
      })
    })]
  });
};

var _default = CollapseItem;
exports["default"] = _default;