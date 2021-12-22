import classNames from "classnames";
import { defineName } from "../utils/name";
import React, { useState, useRef, useEffect } from "react";
import { getPosition, isMobile } from "../utils/dom";
import "./index.less";
import Popover, { PopoverRef } from "../popover";

type MEvent =
  | React.MouseEvent<HTMLDivElement>
  | React.TouchEvent<HTMLDivElement>;

type THandler = React.TouchEventHandler<HTMLDivElement>;
type MHandler = React.MouseEventHandler<HTMLDivElement>;

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
  disabled = false,
  className,
  left,
  right,
  onChange,
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
  const popoverRef = useRef<PopoverRef>(null);

  useEffect(() => {
    setRange([0, innerRef.current?.offsetWidth || 0]);
  }, []);

  useEffect(() => {
    popoverRef.current?.resetPosition();
    // 将 move 事件挂载在 window 上
    // 避免快速拖动导致 move 元素失焦
    const move = isMobile() ? "touchmove" : "mousemove";
    const end = isMobile() ? "touchend" : "mouseup";
    window.addEventListener(move, moveHandler as any);
    window.addEventListener(end, endHandler as any);
    return () => {
      window.removeEventListener(move, moveHandler as any);
      window.removeEventListener(end, endHandler as any);
    };
  });

  // 通过比率计算数值
  const getValue = () => {
    const ratio = state.translate / range[1];
    const value = +(ratio * 100).toFixed(0);
    return Number.isNaN(value) ? 0 : value;
  };

  // 获取有效值，避免超出范围
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
    event.preventDefault();
    const touch = getPosition(event.type, event);
    const diff = touch.clientX - state.startScreen;
    setState((prev) => {
      return {
        ...prev,
        diff,
        translate: getValidTransform(prev.startTranslate + diff),
      };
    });
  };

  const endHandler = () => {
    if (state.startTranslate !== state.translate) {
      onChange?.(getValue());
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

  const events = {
    onTouchStart: startHandler as THandler,
    onMouseDown: startHandler as MHandler,
  };

  return (
    <div className={mCls}>
      {left}
      <div className={`${prefix}__inner`} ref={innerRef}>
        <div className={`${prefix}__runway`}></div>
        <div
          className={`${prefix}__track`}
          style={{ width: state.translate }}
        />
        <Popover
          ref={popoverRef}
          visible={state.isTouched}
          placement="top"
          contentStyle={{ padding: '4px 8px', minWidth: 36, textAlign: 'center', boxSizing: 'border-box' }}
          content={<span>{getValue().toString()}</span>}
        >
          <div className={`${prefix}__thumb`} style={{ left: state.translate }}>
            <div {...events} className={`${prefix}__thumb-inner`}></div>
          </div>
        </Popover>
      </div>
      {right}
    </div>
  );
};

export default Slider;
