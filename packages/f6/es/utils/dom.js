/**
 * 获取元素所属的滚动容器
 */
export var getScrollTarget = function getScrollTarget(element) {
  var currentElement = element;

  while (currentElement && ["HTML", "BODY"].indexOf(currentElement.tagName) === -1) {
    var overflow = document.defaultView.getComputedStyle(currentElement).overflowY;

    if (["scroll", "auto"].indexOf(overflow) !== -1) {
      return currentElement;
    }

    currentElement = currentElement.parentNode;
  }

  return window;
};
/**
 * 获取 window scrollTop
 */

export var getScrollTop = function getScrollTop(element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  } else {
    return element.scrollTop;
  }
};
/**
 * 获取鼠标事件的当前坐标点
 */

export var getPosition = function getPosition(type, event) {
  if (["mousedown", "mousemove"].includes(type)) {
    return {
      clientX: event.clientX,
      clientY: event.clientY
    };
  }

  return event.changedTouches[0];
};
/**
 * 判断 target 是否为 node 的父元素
 */

export var isParent = function isParent(node, target) {
  if (node === target) {
    return true;
  }

  while (node = (_node = node) == null ? void 0 : _node.parentNode) {
    var _node;

    if (node === target) {
      return true;
    }
  }

  return false;
};
/**
 * is mobile
 */

export var isMobile = function isMobile() {
  return "ontouchstart" in window;
};