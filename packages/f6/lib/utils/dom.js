"use strict";
exports.__esModule = true;
exports.isMobile = exports.isParent = exports.getPosition = exports.getScrollTop = exports.getScrollTarget = void 0;
/**
 * 获取元素所属的滚动容器
 */
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
/**
 * 获取 window scrollTop
 */
var getScrollTop = function (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    }
    else {
        return element.scrollTop;
    }
};
exports.getScrollTop = getScrollTop;
/**
 * 获取鼠标事件的当前坐标点
 */
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
/**
 * 判断 target 是否为 node 的父元素
 */
var isParent = function (node, target) {
    if (node === target) {
        return true;
    }
    while ((node = node === null || node === void 0 ? void 0 : node.parentNode)) {
        if (node === target) {
            return true;
        }
    }
    return false;
};
exports.isParent = isParent;
/**
 * is mobile
 */
var isMobile = function () {
    return "ontouchstart" in window;
};
exports.isMobile = isMobile;
//# sourceMappingURL=dom.js.map