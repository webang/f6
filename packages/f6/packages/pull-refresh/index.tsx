import { defineName } from "../utils/name";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./index.less";
import Loading from "../loading";
import { getPosition, getScrollTarget, getScrollTop } from "../utils/dom";

export interface PullRefreshProps {
  onLoad?: Function;
  topPullDistance?: number;
  loadingText?: number;
  pullText?: string;
  looseText?: string;
  topMaxPullDistance?: number;
}

export interface PullRefreshRef {
  finish: Function;
}

type _PullRefresh = ForwardRefRenderFunction<PullRefreshRef, PullRefreshProps>;

const [prefix] = defineName("pull-refresh");

const _PullRefresh: _PullRefresh = (
  {
    onLoad,
    children,
    topPullDistance = 40,
    pullText = "下拉刷新",
    looseText = "释放刷新",
    loadingText = "加载中",
    topMaxPullDistance = 60,
  },
  ref
) => {
  const [state, setState] = useState({
    loading: false,
    diff: 0,
    delta: 0,
    touches: [] as any[],
    translate: 0,
    useAnimation: false,
    touchStartScreenY: 0,
    touchStartTranslateY: 0,
    touched: false,
  });
  const wrapRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    finish: () => {
      setState((prev) => ({
        ...prev,
        translate: 0,
        loading: false,
      }));
    },
  }));

  const handleStart: any = (event: any) => {
    const touch = getPosition(event.type, event);
    setState((prev) => ({
      ...prev,
      useAnimation: false,
      touchStartScreenY: touch.clientY,
      touchStartTranslateY: prev.translate,
      touched: true,
    }));
  };

  const handleMove: any = (event: any) => {
    if (!state.touched) return;
    const touch = getPosition(event.type, event);
    const diff = touch.clientY - state.touchStartScreenY;
    const delta = Math.min(Math.pow(diff, 0.85), topMaxPullDistance);
    const direction = delta > 0 ? 'down' : 'up';
    const scrollTop = getScrollTop(getScrollTarget(wrapRef.current!));
    if (direction === 'down' && scrollTop === 0) {
      setState((prev) => ({
        ...prev,
        useAnimation: false,
        translate: prev.touchStartTranslateY + delta,
      }));
    }
  };

  const handleEnd = () => {
    if (state.translate >= topPullDistance) {
      setState((prev) => ({
        ...prev,
        touchStartTranslateY: 0,
        touchStartScreenY: 0,
        touched: false,
        useAnimation: true,
        loading: true,
      }));
      onLoad && onLoad();
    } else {
      setState((prev) => ({
        ...prev,
        translate: 0,
        touchStartTranslateY: 0,
        touchStartScreenY: 0,
        touched: false,
        useAnimation: true,
        loading: false,
      }));
    }
  };

  const style: React.CSSProperties = {
    transform: `translate3d(0, ${state.translate}px, 0)`,
    transitionDuration: state.useAnimation ? "300ms" : `0ms`,
  };

  const topText = () => {
    if (state.loading) {
      return <Loading spinnerSize={20} message={loadingText} />;
    } else if (state.translate >= topPullDistance) {
      return looseText;
    } else if (state.translate < topPullDistance) {
      return pullText;
    }
  };

  return (
    <div
      className={prefix}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchMove={handleMove}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      style={style} 
    >
      <div className={`${prefix}-indictor`}>
        {topText()}
      </div>
      <div className={`${prefix}-container`} ref={wrapRef}>
        {children}
      </div>
    </div>
  );
};

const PullRefresh = forwardRef(_PullRefresh);

export default PullRefresh;
