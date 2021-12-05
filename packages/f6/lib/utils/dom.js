"use strict";
exports.__esModule = true;
exports.getPosition = exports.getScrollTop = exports.getScrollTarget = void 0;
var getScrollTarget = function (element) {
    var currentElement = element;
    while (currentElement &&
        ["HTML", "BODY"].indexOf(currentElement.tagName) === -1) {
        var overflow = document.defaultView.getComputedStyle(currentElement).overflowY;
        if (["scroll", "auto"].indexOf(overflow) !== -1) {
            return currentElement;
        }
        currentElement = currentElement.parentNode;
    }
    return window;
};
exports.getScrollTarget = getScrollTarget;
var getScrollTop = function (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    }
    else {
        return element.scrollTop;
    }
};
exports.getScrollTop = getScrollTop;
var getPosition = function (type, event) {
    if (["mousedown", "mousemove"].includes(type)) {
        return {
            clientX: event.clientX,
            clientY: event.clientY
        };
    }
    return event.changedTouches[0];
};
exports.getPosition = getPosition;
//# sourceMappingURL=dom.js.map