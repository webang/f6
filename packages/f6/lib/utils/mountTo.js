"use strict";
exports.__esModule = true;
exports.mountTo = void 0;
var tslib_1 = require("tslib");
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
function mountTo(element, mountNode) {
    if (mountNode === void 0) { mountNode = document.body; }
    var el = document.createElement("div");
    mountNode.appendChild(el);
    function unmount() {
        var unmounted = react_dom_1["default"].unmountComponentAtNode(el);
        if (unmounted && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    react_dom_1["default"].render(element, el);
    return unmount;
}
exports.mountTo = mountTo;
//# sourceMappingURL=mountTo.js.map