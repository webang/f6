"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _name = require("../utils/name");

var _reactTransitionGroup = require("react-transition-group");

require("./index.css");

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _spinner = _interopRequireDefault(require("../spinner"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["position", "message"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)("toast"),
    prefix = _defineName[0];

var instances = [];
var defaultAnimationTime = 300;
var single = true;
/**
 * @description
 */

var AnimateWrapper = function AnimateWrapper(_ref, ref) {
  var position = _ref.position,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = (0, _react.useState)(message),
      content = _useState2[0],
      _setContent = _useState2[1];

  (0, _react.useEffect)(function () {
    setVisible(true);
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      close: function close() {
        setVisible(false);
      },
      setContent: function setContent(message) {
        _setContent(message);
      }
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    "in": visible,
    timeout: defaultAnimationTime,
    classNames: "slide-" + position,
    unmountOnExit: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Toast, _extends({
      position: position,
      message: content
    }, restProps))
  });
};

var AnimateWrapperRefed = /*#__PURE__*/_react["default"].forwardRef(AnimateWrapper);

var Toast = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Toast, _React$Component);

  function Toast() {
    return _React$Component.apply(this, arguments) || this;
  }

  Toast.formatParams = function formatParams(params) {
    var getField = function getField(params, key, _default) {
      if (typeof params === 'string') return _default;
      return typeof params[key] !== "undefined" ? params[key] : _default;
    };

    var type = getField(params, 'type', 'text');
    var message = getField(params, 'message', '');
    var duration = getField(params, 'duration', 1500);
    var position = getField(params, 'position', 'middle');
    var spinner = getField(params, 'spinner', undefined);
    return {
      duration: duration,
      position: position,
      message: message,
      type: type,
      spinner: spinner
    };
  }
  /**
   * @description 创建 toast
   */
  ;

  Toast.show = function show(params) {
    var _Toast$formatParams = Toast.formatParams(params),
        type = _Toast$formatParams.type,
        duration = _Toast$formatParams.duration,
        position = _Toast$formatParams.position,
        message = _Toast$formatParams.message,
        spinner = _Toast$formatParams.spinner;

    var ref = /*#__PURE__*/_react["default"].createRef();

    var result = {
      mountNode: Toast.createSlot(),
      close: function close(force) {
        if (force) {
          if (result.mountNode) {
            document.body.removeChild(result.mountNode);
          }

          result.mountNode = null;
        } else {
          var _ref$current;

          (_ref$current = ref.current) == null ? void 0 : _ref$current.close();
          setTimeout(function () {
            if (result.mountNode) {
              document.body.removeChild(result.mountNode);
            }

            result.mountNode = null;
          }, defaultAnimationTime);
        }
      },
      setContent: function setContent(content) {
        var _ref$current2;

        (_ref$current2 = ref.current) == null ? void 0 : _ref$current2.setContent(content);
      }
    };

    if (single) {
      Toast.forceClear();
    }

    instances.push(result);

    _reactDom["default"].render( /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimateWrapperRefed, {
      spinner: spinner,
      type: type,
      position: position,
      duration: duration,
      message: message,
      ref: ref
    }), result.mountNode);

    if (duration) {
      setTimeout(result.close, duration);
    }

    return result;
  };

  Toast.forceClear = function forceClear() {
    while (instances.length) {
      var it = instances.pop();
      it == null ? void 0 : it.close(true);
    }
  };

  Toast.clear = function clear() {
    while (instances.length) {
      var it = instances.pop();
      it == null ? void 0 : it.close();
    }
  };

  Toast.config = function config(option) {
    single = option.single;
  };

  Toast.hide = function hide() {
    Toast.clear();
  };

  Toast.createSlot = function createSlot() {
    var mountNode = document.createElement("div");
    mountNode.setAttribute("class", prefix + "-wrapper");
    document.body.appendChild(mountNode);
    return mountNode;
  };

  var _proto = Toast.prototype;

  _proto.renderIcon = function renderIcon() {
    if (this.props.type === 'success') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        className: prefix + "__icon",
        name: "success3"
      });
    }

    if (this.props.type === 'fail') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        className: prefix + "__icon",
        name: "close-circle-o"
      });
    }

    if (this.props.type === 'warning') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        className: prefix + "__icon",
        name: "warn"
      });
    }

    if (this.props.type === 'loading') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_spinner["default"], {
        type: this.props.spinner || "oval"
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        position = _this$props.position,
        type = _this$props.type;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        transitionDuration: defaultAnimationTime + "ms"
      },
      className: (0, _classnames["default"])([prefix, prefix + "--" + type, prefix + "--" + position]),
      children: [this.renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__content",
        children: this.props.message
      })]
    });
  };

  return Toast;
}(_react["default"].Component);

var _default2 = Toast;
exports["default"] = _default2;