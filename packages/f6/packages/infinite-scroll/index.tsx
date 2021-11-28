import { getScrollTarget } from '../utils/dom';
import React, { FC, forwardRef, ForwardRefRenderFunction, ReactNode, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Loading from '../loading';
import { defineName } from '../utils/name';
import './index.less';

// export interface ListProp {
//   onLoad?: (finish: Function) => void;
//   offset?: number;
//   loading?: boolean;
//   finished?: boolean;
//   autoCheck?: boolean;
//   immediateCheck?: boolean;
// }

export interface InfiniteScrollProps {
  hasMore?: boolean;
  footer?: (params: {
    loading: boolean;
    hasMore: boolean;
  }) => ReactNode
  onLoad?: () => void;
  children?: ReactNode;
}

export interface InfiniteScrollMethods {
  finish: () => void;
}

const [prefix] = defineName('infinite-scroll')

const _InfiniteScroll: ForwardRefRenderFunction<InfiniteScrollMethods, InfiniteScrollProps> = ({
  children,
  onLoad,
  footer,
  hasMore = true
}, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    finish: () => {
      setLoading(false);
    }
  }))

  useEffect(() => {
    const target = getScrollTarget(wrapperRef.current!);
    const handleScroll = () => {
      const container = containerRef.current!;

      let wrapperHeight = target === window
        ? target.innerHeight
        : (target as HTMLDivElement).offsetHeight;

      let scrollTop = target === window
        ? document.documentElement.scrollTop
        : (target as HTMLDivElement).scrollTop;

      const bottomed = container.offsetHeight === wrapperHeight + scrollTop;
      if (!loading && bottomed && hasMore) {
        setLoading(true);
        onLoad && onLoad()
      }
    }
    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    }
  }, [loading, hasMore]);

  const mFooter = () => {
    if (footer) return footer({ loading, hasMore });
    if (loading) {
      return (
        <div style={{ lineHeight: '40px', textAlign: 'center' }}>
          <Loading />
        </div>
      )
    } else {
      if (hasMore) {
        return null;
      } else {
        return (
          <div style={{ lineHeight: '40px', textAlign: 'center' }}>
            <span style={{ color: '#ccc' }}>NO MORE</span>
          </div>
        )
      }
    }
  }

  return (
    <div ref={wrapperRef} className={`${prefix}-wrapper`}>
      <div className={`${prefix}-container`} ref={containerRef}>
        {children}
        {mFooter()}
      </div>
    </div>
  )
}

const InfiniteScroll = forwardRef(_InfiniteScroll);

export default InfiniteScroll;