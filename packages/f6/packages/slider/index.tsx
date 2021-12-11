import classNames from "classnames";
import { defineName } from "../utils/name";
import React, { useState, useRef, useEffect } from "react";
import { getPosition, isMobile } from "../utils/dom";
import "./index.less";

type MEvent = (React.MouseEvent<HTMLDivElement>)|(React.TouchEvent<HTMLDivElement>)

export interface SliderProps {
  className?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  runwayHeight?: number;
  runwayColor?: string;
  trackColor?: string;
  thumbColor?: string;
  step?: number;
  disabled?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onChange?: (ratio: number) => void;
}

const [prefix] = defineName("slider");

const Slider: React.FC<SliderProps> = ({
  className,
  defaultValue = 0,
  min = 0,
  max = 100,
  runwayHeight = 2,
  runwayColor,
  trackColor,
  thumbColor,
  step = 1,
  disabled = false,
  left,
  right,
  onChange
}) => {
  const [state, setState] = useState({
    diff: 0,
    translate: 0,
    startTranslate: 0,
    startScreen: 0,
    isTouched: false,
  });
  const [range, setRange] = useState([0, 0]);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRange([0, innerRef.current?.offsetWidth || 0])
  }, [])

  const notify = () => {
    const ratio = state.translate / range[1];
    onChange?.(+(ratio * 100).toFixed(0));
  }

  const getValidTransform = (val: number) => {
    const min = range[0];
    const max = range[1];
    if (val < min) val = min;
    if (val > max) val = max;
    return val;
  };

  const startHandler = (event: MEvent) => {
    const touch = getPosition(event.type, event);
    setState((prev) => ({
      ...prev,
      useAnimation: false,
      startScreen: touch.clientX,
      startTranslate: prev.translate,
      isTouched: true,
    }));
  };

  const moveHandler = (event: MEvent) => {
    if (!state.isTouched) return;
    const touch = getPosition(event.type, event);
    const diff = touch.clientX - state.startScreen;
    const delta = diff * 1;

    setState((prev) => {
      return {
        ...prev,
        diff,
        translate: getValidTransform(prev.startTranslate + delta),
      };
    });
  };

  const endHandler = () => {
    if (state.startTranslate !== state.translate) {
      notify();
    }
    setState((prev) => ({
      ...prev,
      isTouched: false,
    }));
  };

  const mCls = classNames({
    className,
    [prefix]: true,
    [`${prefix}--disabled`]: disabled,
  });

  const events = isMobile()
    ? {
        onTouchStart: startHandler as React.TouchEventHandler<HTMLDivElement>,
        onTouchMove: moveHandler as React.TouchEventHandler<HTMLDivElement>,
        onTouchEnd: endHandler,
      }
    : {
        onMouseDown: startHandler as React.MouseEventHandler<HTMLDivElement>,
        onMouseMove: moveHandler as React.MouseEventHandler<HTMLDivElement>,
        onMouseUp: endHandler,
        onMouseOut: endHandler
      };

  return (
    <div className={mCls}>
      {left}
      <div className={`${prefix}__inner`} ref={innerRef}>
        <div className={`${prefix}__runway`}></div>
        <div className={`${prefix}__track`} style={{ width: state.translate }}></div>
        <div
          className={`${prefix}__thumb`}
          {...events}
          style={{ left: state.translate }}
        />
      </div>
      {right}
    </div>
  );
};

export default Slider;