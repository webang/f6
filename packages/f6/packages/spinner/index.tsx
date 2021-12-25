import classNames from "classnames";
import React, { FC, CSSProperties } from "react";
import { defineName } from "../utils/name";
import "./index.less";
import SpinnerLines from "./spinner-lines";
import OvalSpinner from "./spinner-oval";
import SpinnerCrescent from "./spinner-crescent";

// 1. 月牙形 crescent
// 2. 椭圆形 oval
// 3. 线性  lines
export type SpinnerType = "lines" | "crescent" | "oval";

export interface SpinnerProps {
  size?: number | string;
  type?: SpinnerType;
  className?: string;
  style?: CSSProperties;
}

const Spinner: FC<SpinnerProps> = ({
  type = "crescent",
  className,
  style,
  size,
}) => {
  const [prefix] = defineName("spinner");
  const mCls = classNames([prefix, `${prefix}--${type}`, className], {});
  const mStyle = { ...(style || {}) };

  const unitValue = typeof size === "number" ? `${size}px` : size;
  if (size) {
    Object.assign(mStyle, {
      width: unitValue,
      height: unitValue,
    });
  }

  switch (type) {
    case "oval": {
      return <OvalSpinner style={mStyle} className={mCls} />;
    }
    case "lines": {
      return <SpinnerLines style={mStyle} className={mCls} />;
    }
    case "crescent":
      return <SpinnerCrescent style={mStyle} className={mCls} />;
  }
};

export default Spinner;