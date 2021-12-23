import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from "react";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";

var Trigger = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Trigger, _React$Component);

  function Trigger() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Trigger.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: this.props.children
    });
  };

  return Trigger;
}(React.Component);

export default Trigger;