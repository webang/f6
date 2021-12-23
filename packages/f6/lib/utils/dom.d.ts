/**
 * 获取元素所属的滚动容器
 */
export declare const getScrollTarget: (element: Element) => Element | (Window & typeof globalThis);
/**
 * 获取 window scrollTop
 */
export declare const getScrollTop: (element: Window | Element) => number;
/**
 * 获取鼠标事件的当前坐标点
 */
export declare const getPosition: (type: string, event: any) => {
    clientX: number;
    clientY: number;
};
/**
 * 判断 target 是否为 node 的父元素
 */
export declare const isParent: (node: Element, target: Element) => boolean;
/**
 * is mobile
 */
export declare const isMobile: () => boolean;
