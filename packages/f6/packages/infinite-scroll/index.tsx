import { getScrollTarget } from "../utils/dom";
import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";

import Loading from "../loading";
import { defineName } from "../utils/name";
import "./index.less";

export interface InfiniteScrollProps {
  disabled?: boolean;
  loading?: boolean;
  onLoad?: (finish?: () => void) => void;
  footer?: (params: { loading: boolean; disabled: boolean }) => ReactNode;
}

export interface InfiniteScrollMethods {
  finish: () => void;
}

const [prefix] = defineName("infinite-scroll");

const InfiniteScroll: ForwardRefRenderFunction<
  InfiniteScrollMethods,
  InfiniteScrollProps
> = (props, ref) => {
  const lockRef = useRef({ isLocked: false });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { children, onLoad, footer, loading = false, disabled = true } = props;

  const finish = () => {
    lockRef.current.isLocked = false;
  }

  useImperativeHandle(ref, () => ({ finish }));

  useEffect(() => {
    const target = getScrollTarget(wrapperRef.current!);
    const handleScroll = () => {
      const isWin = target === window;
      const container = containerRef.current!;

      let wrapperHeight = isWin
        ? target.innerHeight
        : (target as HTMLDivElement).offsetHeight;

      let scrollTop = isWin
        ? document.documentElement.scrollTop
        : (target as HTMLDivElement).scrollTop;

      let offsetHeight = isWin
        ? document.documentElement.offsetHeight
        : container.offsetHeight;

      // !TODO target 只能是当前容器 或者 window
      // 不然这里的 container 是错误的

      // console.log(offsetHeight, wrapperHeight, scrollTop);
      const bottomed = offsetHeight === wrapperHeight + scrollTop;

      if (!loading && !lockRef.current.isLocked && bottomed && !disabled) {
        onLoad && onLoad();
      }
    };

    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [props]);

  const mFooter = () => {
    if (footer) return footer({ loading, disabled });
    if (loading) {
      return (
        <div style={{ lineHeight: "40px", textAlign: "center" }}>
          <Loading />
        </div>
      );
    } else {
      if (disabled) {
        return (
          <div style={{ lineHeight: "40px", textAlign: "center" }}>
            <span style={{ color: "#ccc" }}>NO MORE</span>
          </div>
        );
      } else {
        return null;
      }
    }
  };

  return (
    <div ref={wrapperRef} className={`${prefix}-wrapper`}>
      <div className={`${prefix}-container`} ref={containerRef}>
        {children}
        {mFooter()}
      </div>
    </div>
  );
};

export default forwardRef(InfiniteScroll);