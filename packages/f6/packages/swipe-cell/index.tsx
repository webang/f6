import { defineName } from "../utils/name";
import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import './index.less';
import { getPosition, isMobile, isParent } from "../utils/dom";

export interface SwipeCellProps {
  className?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
}

const [prefix] = defineName("swipe-cell");

const SwipeCell: FC<SwipeCellProps> = (p) => {
  const { className, children, right, left } = p;
  const mCls = classNames([prefix, className]);
  const mRef = useRef<HTMLDivElement>(null);
  const rRef = useRef<HTMLDivElement>(null);
  const lRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (mRef.current) {
        console.log(e.target, mRef.current)
        if (!isParent(e.target, mRef.current)) {
          setState((prev) => {
            return {
              ...prev,
              translate: 0
            }
          })
        }
      }
    }
    const event = isMobile() ? 'touchstart' : 'mousedown'
    document.addEventListener(event, handleClick);
    return () => {
      document.removeEventListener(event, handleClick);
    }
  }, [])

  const [state, setState] = useState({
    diff: 0,
    translate: 0,
    startScreen: 0,
    startTranslate: 0,
    touched: false,
    useAnimation: false
  })

  const startHandler: React.TouchEventHandler = (event) => {
    const touch = getPosition(event.type, event);
    setState((prev) => ({
      ...prev,
      useAnimation: false,
      startScreen: touch.clientX,
      startTranslate: prev.translate,
      touched: true,
    }));
  }

  const getMaxTranslate = () => {
    return [
      lRef.current?.offsetWidth || 0,
      -(rRef.current?.offsetWidth || 0)
    ]
  }

  const getValidTransform = (val: number) => {
    const maxR = rRef.current?.offsetWidth || 0;
    const maxL = lRef.current?.offsetWidth || 0;
    if (val < -maxR) val = -maxR;
    if (val > maxL) val = maxL;
    return val;
  }

  const moveHandler: React.TouchEventHandler = (event) => {
    if (!state.touched) return;
    const touch = getPosition(event.type, event);
    const diff = touch.clientX - state.startScreen;
    const delta = diff * 1;

    setState((prev) => {
      return {
        ...prev,
        diff,
        useAnimation: false,
        translate: getValidTransform(prev.startTranslate + delta),
      }
    });
  }

  const endHandler = () => {
    setState((prev) => {
      const range = getMaxTranslate();
      let translate = prev.translate;
      if (prev.diff < 0 && prev.diff < -10) {
        translate = range[1]
      } else if (prev.diff > 0 && prev.diff > 10) {
        translate = range[0]
      } else {
        translate = 0
      }
      return {
        ...prev,
        diff: 0,
        translate,
        useAnimation: true,
        touched: false,
      }
    });
  }

  const events: any = isMobile() ? {
    onTouchStart: startHandler,
    onTouchMove: moveHandler,
    onTouchEnd: endHandler
  } : {
    onMouseDown: startHandler,
    onMouseMove: moveHandler,
    onMouseUp: endHandler,
  }

  const style: React.CSSProperties = {
    transform: `translate3d(${state.translate}px, 0, 0)`,
    transitionDuration: state.useAnimation ? "300ms" : `0ms`,
  };

  return (
    <div className={mCls} ref={mRef} {...events}>
      <div className={`${prefix}-wrapper`} style={style}>
        <div className={`${prefix}__left`} ref={lRef}>{left}</div>
        {children}
        <div className={`${prefix}__right`} ref={rRef}>{right}</div>
      </div>
    </div>
  );
};

export default SwipeCell;