import { defineName } from "../utils/name";
import React, { useEffect, useState, useRef, CSSProperties } from "react";

export interface AffixProps {
  top?: number;
  container?: (() => HTMLElement) | Window;
  wrapperStyle?: (params: { fixed: boolean }) => React.CSSProperties;
}

const [prefix] = defineName("affix");

const getRectY = (element: HTMLElement) => {
  return element.getBoundingClientRect().top;
};

const getWindowScrollTop = () => {
  return document.documentElement.scrollTop;
};

const addEvent = (target: EventTarget, type: string, cb: Function) => {
  target.addEventListener(type, cb as any);
};

const removeEvent = (target: EventTarget, type: string, cb: Function) => {
  target.removeEventListener(type, cb as any);
};

const Affix: React.FC<AffixProps> = ({
  top,
  children,
  wrapperStyle,
  container = window,
}) => {
  const [state, setState] = useState({
    fixed: false,
    offsetTop: 0,
    pOffsetTop: 0,
    distance: 0,
  });

  const ref = useRef<HTMLDivElement>(null);
  let target: Window | HTMLElement = container as Window;
  const isWindow = target === window;

  useEffect(() => {
    let pOffsetTop = 0;
    let offsetTop = getRectY(ref.current!);

    if (typeof container === "function") {
      target = container() as HTMLElement;
      pOffsetTop = getRectY(target);
    }

    if (isWindow) {
      offsetTop = offsetTop + getWindowScrollTop();
    }

    setState((prev) => ({
      ...prev,
      offsetTop,
      pOffsetTop,
      distance: offsetTop - pOffsetTop,
    }));

    const handleScroll = () => {
      if (target === window) {
        const scrollTop = getWindowScrollTop();
        setState((prev) => ({
          ...prev,
          fixed: scrollTop + (top || 0) >= offsetTop,
        }));
      } else {
        target = target as HTMLElement;
        const scrollTop = target.scrollTop;
        pOffsetTop = getRectY(target);
        setState((prev) => ({
          ...prev,
          pOffsetTop,
          fixed: scrollTop + (top || 0) >= prev.distance,
        }));
      }
    };

    handleScroll();

    // 当页面滚动时，需要更新 target 的 offsetTop
    const onWindowScroll = () => {
      target = target as HTMLElement;
      const scrollTop = target.scrollTop;
      pOffsetTop = getRectY(target);
      setState((prev) => ({
        ...prev,
        pOffsetTop,
        fixed: scrollTop + (top || 0) >= prev.distance,
      }));
    };

    if (!isWindow) addEvent(window, "scroll", onWindowScroll);
    addEvent(target, "scroll", handleScroll);

    return () => {
      removeEvent(target, "scroll", handleScroll);
      if (!isWindow) removeEvent(window, "scroll", onWindowScroll);
    };
  }, []);

  const style: CSSProperties = state.fixed
    ? {
        position: "fixed",
        top: isWindow ? top : state.pOffsetTop + (top || 0),
      }
    : {};

  if (wrapperStyle) {
    Object.assign(style, wrapperStyle({ fixed: state.fixed }));
  }

  return (
    <div className={prefix} ref={ref} style={style}>
      {children}
    </div>
  );
};

export default Affix;
