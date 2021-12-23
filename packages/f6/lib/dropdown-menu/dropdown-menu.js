"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _name = require("../utils/name");

var _checkList = _interopRequireDefault(require("../check-list"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("dropdown-menu"),
    prefix = _defineName[0];

var DropdownMenu = function DropdownMenu(_ref) {
  var onClickItem = _ref.onClickItem,
      className = _ref.className,
      onClose = _ref.onClose,
      children = _ref.children;

  var _useState = (0, _react.useState)({
    top: 0,
    current: undefined
  }),
      state = _useState[0],
      setState = _useState[1];

  var barRef = (0, _react.useRef)(null);

  var mChildren = _react["default"].Children.toArray(children);

  var updatePosition = function updatePosition() {
    if (barRef.current) {
      var rect = barRef.current.getBoundingClientRect();
      setState(function (prev) {
        return _extends({}, prev, {
          top: rect.top + rect.height
        });
      });
    }
  };

  (0, _react.useEffect)(function () {
    updatePosition();
  }, []);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', updatePosition);
    return function () {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [updatePosition]);
  var mCls = (0, _classnames["default"])([className, prefix]);
  var maskStl = {
    top: state.top
  };

  var handleClick = function handleClick(i) {
    if (i === state.current) {
      setState(function (prev) {
        return _extends({}, prev, {
          current: undefined
        });
      });
      onClose == null ? void 0 : onClose();
    } else {
      setState(function (prev) {
        return _extends({}, prev, {
          current: i
        });
      });
    }
  };

  var menus = mChildren.map(function (it, index) {
    var element = it;
    var style = {
      transform: "rotate(" + (state.current == index ? 180 : 0) + "deg)"
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "-item",
      onClick: function onClick() {
        return handleClick(index);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "-item-name",
        children: element.props.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        style: style,
        className: prefix + "__icon",
        name: "arrow-down"
      })]
    });
  });

  var renderAction = function renderAction() {
    return mChildren.map(function (it, index) {
      if (index !== state.current) return null;
      var element = it;
      return (element.props.actions || []).map(function (action) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkList["default"].Item, {
          onClick: function onClick() {
            onClickItem == null ? void 0 : onClickItem({
              index: index,
              action: action
            });
          },
          value: action.value,
          children: action.name
        });
      });
    });
  };

  var renderMask = function renderMask() {
    if (state.current === undefined) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__mask",
      style: maskStl,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__content",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkList["default"], {
          children: renderAction()
        })
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: barRef,
      className: prefix + "-items",
      children: menus
    }), renderMask()]
  });
};

var _default = DropdownMenu;
exports["default"] = _default;