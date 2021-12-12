import { defineName } from "../utils/name";
import React, { CSSProperties, useState, useEffect } from "react";
import { FC } from "react";

export interface MarqueeProps {
  delay?: number; // 启动轮播的延时时间
  interval?: number; // 轮播间隔时间
  duration?: number; // 一次轮播消耗的时间
  direction?: 'up' | 'down'; // 轮播方向
  itemHeight?: number; // 轮播子项高度
  showHeader?: boolean;
}

const [prefix] = defineName('marquee');

const Marquee: FC<MarqueeProps> = ({
  children,
  delay = 1000,
  interval = 1500,
  duration = 300,
  direction = 'up',
  showHeader = false,
  itemHeight = 30
}) => {
  const [state, setState] = useState({
    translate: 0,
    current: 0,
    useAnimate: false
  });
  const mList = React.Children.toArray(children)

  const style: CSSProperties = {
    transform: `translateY(${state.current * -itemHeight}px)`,
    transition: `transform ${state.useAnimate ? duration : 0}ms`
  }

  useEffect(() => {
    let id = setTimeout(() => {
      setState((prev) => {
        const next = prev.current === mList.length ? 0 : prev.current + 1
        return {
          ...prev,
          current: next,
          useAnimate: prev.current !== mList.length
        }
      })
    }, interval)
    return () => {
      clearTimeout(id)
    }
  })
  
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`} style={style}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;