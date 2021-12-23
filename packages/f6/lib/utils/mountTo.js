"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountTo = mountTo;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mountTo(element, mountNode) {
  if (mountNode === void 0) {
    mountNode = document.body;
  }

  var el = document.createElement("div");
  mountNode.appendChild(el);

  function unmount() {
    var unmounted = _reactDom["default"].unmountComponentAtNode(el);

    if (unmounted && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  _reactDom["default"].render(element, el);

  return unmount;
}