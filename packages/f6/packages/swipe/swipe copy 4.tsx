import {
  FC,
  Children,
  useRef,
  useEffect,
  CSSProperties,
  useState,
  useCallback,
} from "react";
import { defineName } from "../utils/name";
import { getPosition } from "../utils/dom";
import Button from "../button";
import React from "react";

export interface SwipeProps {
  direction?: "horizontal" | "vertical";
  loop?: boolean;
  duration?: number;
  activeIndex?: number;
  autoplay?: number;
  delay?: number;
  effect?: "slide" | "scale";
  spaceBetween?: number;
  width?: number;
  height?: number;
}

const RATIO = 0.3;
const SHORT_TOUCH = 250;
const [prefix] = defineName("swipe");

const Swipe: FC<SwipeProps> = (props) => {
  const {
    children,
    spaceBetween = 0,
    loop = true,
    duration = 300,
    direction = "horizontal",
  } = props;
  const _children = Children.toArray(children).map((it, index) => {
    return React.cloneElement(it as any, {
      key: index,
    });
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    translate: 0,
    current: 0,
    useAnimation: true,
    maxTranslate: 0,
    maxGridIndex: 0,
    minGridIndex: 0,
    minTranslate: 0,
  });

  const mRef = useRef({
    size: 0,
    curWidth: 0,
    curHeight: 0,
    isScrolling: undefined,

    startX: 0,
    startY: 0,
    startTranslate: 0,
    startTime: 0,
    diffX: 0,
    diffY: 0,
    diff: 0,
    isTouched: false,

    gridIndex: 0,
    slidesGrid: [] as number[],
    rectProp: direction === "horizontal" ? "width" : "height",
    interval: null as any,
    realLength: _children.length || 0,
    virtualLen: _children.length + 2,
    initialized: false,
    isHorizontal: direction === "horizontal",
    isLoop: !!loop,
  });
  const that = mRef.current;

  const play = () => {
    that.interval = setTimeout(() => {
      slideNext();
      play();
    }, 1000);
  };

  useEffect(() => {
    onMount();
    play()
  }, []);

  const onMount = () => {
    if (!wrapperRef.current) return;
    if (!containerRef.current) return;

    const wrapperEl = wrapperRef.current;
    const { width, height } = wrapperEl.getBoundingClientRect();

    that.curWidth = width;
    that.curHeight = height;
    that.size = that.isHorizontal ? +that.curWidth : +that.curHeight;

    const list = new Array(that.virtualLen).fill(0);
    that.slidesGrid = list.map((_, index) => {
      return index * that.size;
    });

    if (that.isHorizontal) {
      wrapperEl.style.width = that.curWidth + "px";
    } else {
      wrapperEl.style.height = that.curHeight + "px";
    }

    that.initialized = true;

    setState((prev) => {
      return {
        ...prev,
        maxTranslate: that.slidesGrid[that.slidesGrid.length - 1],
      };
    });
  };

  const slideTo = (index: number, useAnimation: boolean = true) => {
    setState((prev) => {
      return {
        ...prev,
        current: index,
        useAnimation: useAnimation,
        translate: -that.slidesGrid[index],
      };
    });
    if (index === that.slidesGrid.length - 1) {
      setTimeout(() => {
        index = 1;
        setState((prev) => {
          return {
            ...prev,
            current: index,
            useAnimation: false,
            translate: -that.slidesGrid[index],
          };
        });
      }, duration);
    }
    if (index === 0) {
      setTimeout(() => {
        index = that.slidesGrid.length - 1;
        setState((prev) => {
          return {
            ...prev,
            current: index,
            useAnimation: false,
            translate: -that.slidesGrid[index],
          };
        });
      }, duration);
    }
  };

  const slideNext = () => {
    slideTo(state.current + 1);
  };

  const startHandler: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = getPosition(event.type, event);
    that.startX = touch.clientX;
    that.startY = touch.clientY;
    that.startTime = Date.now();
    that.startTranslate = state.translate;
    that.isTouched = true;
  };

  const moveHandler: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = getPosition(event.type, event);
    that.diffX = touch.clientX - that.startX;
    that.diffY = touch.clientY - that.startY;
    that.diff = that.isHorizontal ? that.diffX : that.diffY;
    setState((prev) => {
      return {
        ...prev,
        useAnimation: false,
        translate: that.startTranslate + (touch.clientX - that.startX),
      };
    });
  };

  const endHandler = () => {
    if (that.diff === 0) return;
    const deltaTime = Date.now() - that.startTime;
    if (that.diff < 0) {
      if (deltaTime < SHORT_TOUCH) {
        slideTo(state.current + 1);
      } else {
        if (that.diff < -100) {
          slideTo(state.current + 1);
        } else {
          slideTo(state.current);
        }
      }
    } else if (that.diff > 0) {
      if (deltaTime < SHORT_TOUCH) {
        slideTo(state.current - 1);
      } else {
        if (that.diff > 100) {
          slideTo(state.current - 1);
        } else {
          slideTo(state.current);
        }
      }
    }

    that.diff = 0;
    that.isTouched = false;
  };

  const containerStyle: CSSProperties = {
    transitionDuration: `${state.useAnimation ? duration : 0}ms`,
    [that.rectProp]: `${that.slidesGrid.length * that.size}px`,
    transform: that.isHorizontal
      ? `translate3d(${state.translate}px, 0, 0)`
      : `translate3d(0, ${state.translate}px, 0)`,
  };

  const renderChildren = () => {
    return (
      <div
        ref={containerRef}
        style={containerStyle}
        className={`${prefix}-container`}
      >
        {loop
          ? [
              React.cloneElement(_children[_children.length - 1], {
                key: "111",
              }),
              ..._children,
              React.cloneElement(_children[0], {
                key: "222",
              }),
            ]
          : _children}
      </div>
    );
  };

  return (
    <div>
      <Button>next</Button>
      <div
        onTouchMove={moveHandler}
        onTouchStart={startHandler}
        onTouchEnd={endHandler}
        className={prefix}
        ref={wrapperRef}
      >
        {renderChildren()}
      </div>
    </div>
  );
};

export default Swipe;
