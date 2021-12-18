import { defineName } from "../utils/name";
import React, { CSSProperties, useState, useEffect } from "react";
import { FC } from "react";
import { MarqueeContext } from "./context";

export interface MarqueeProps {
  interval?: number;
  duration?: number;
  itemHeight?: number;
}

const [prefix] = defineName("marquee");

const Marquee: FC<MarqueeProps> = ({
  children,
  interval = 2000,
  duration = 300,
  itemHeight = 30,
}) => {
  const [state, setState] = useState({
    translate: 0,
    current: 0,
    useAnimate: false,
  });

  useEffect(() => {
    let id = setTimeout(() => {
      setState((prev) => {
        const next = prev.current === mList.length ? 0 : prev.current + 1;
        return {
          ...prev,
          current: next,
          useAnimate: prev.current !== mList.length,
        };
      });
    }, interval);
    return () => {
      clearTimeout(id);
    };
  });

  const mList = React.Children.toArray(children);

  const style: CSSProperties = {
    transform: `translateY(${state.current * -itemHeight}px)`,
    transition: `transform ${state.useAnimate ? duration : 0}ms`,
  };

  return (
    <div className={prefix} style={{ height: itemHeight + "px" }}>
      <div className={`${prefix}__inner`} style={style}>
        <MarqueeContext.Provider
          value={{
            itemHeight,
          }}
        >
          {children}
          {children}
        </MarqueeContext.Provider>
      </div>
    </div>
  );
};

export default Marquee;