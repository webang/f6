import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["position", "message"];
import classNames from "classnames";
import React, { useState, useEffect, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import { defineName } from "../utils/name";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import Icon from "f6-icons";
import Spinner from "../spinner";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("toast"),
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

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var _useState2 = useState(message),
      content = _useState2[0],
      _setContent = _useState2[1];

  useEffect(function () {
    setVisible(true);
  }, []);
  useImperativeHandle(ref, function () {
    return {
      close: function close() {
        setVisible(false);
      },
      setContent: function setContent(message) {
        _setContent(message);
      }
    };
  }, []);
  return /*#__PURE__*/_jsx(CSSTransition, {
    "in": visible,
    timeout: defaultAnimationTime,
    classNames: "slide-" + position,
    unmountOnExit: true,
    children: /*#__PURE__*/_jsx(Toast, _extends({
      position: position,
      message: content
    }, restProps))
  });
};

var AnimateWrapperRefed = /*#__PURE__*/React.forwardRef(AnimateWrapper);

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

    var ref = /*#__PURE__*/React.createRef();
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
    ReactDOM.render( /*#__PURE__*/_jsx(AnimateWrapperRefed, {
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
      return /*#__PURE__*/_jsx(Icon, {
        className: prefix + "__icon",
        name: "success3"
      });
    }

    if (this.props.type === 'fail') {
      return /*#__PURE__*/_jsx(Icon, {
        className: prefix + "__icon",
        name: "close-circle-o"
      });
    }

    if (this.props.type === 'warning') {
      return /*#__PURE__*/_jsx(Icon, {
        className: prefix + "__icon",
        name: "warn"
      });
    }

    if (this.props.type === 'loading') {
      return /*#__PURE__*/_jsx(Spinner, {
        type: this.props.spinner || "oval"
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        position = _this$props.position,
        type = _this$props.type;
    return /*#__PURE__*/_jsxs("div", {
      style: {
        transitionDuration: defaultAnimationTime + "ms"
      },
      className: classNames([prefix, prefix + "--" + type, prefix + "--" + position]),
      children: [this.renderIcon(), /*#__PURE__*/_jsx("div", {
        className: prefix + "__content",
        children: this.props.message
      })]
    });
  };

  return Toast;
}(React.Component);

export default Toast;