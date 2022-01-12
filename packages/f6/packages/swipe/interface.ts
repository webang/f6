import React from "react";

export interface SwipeProps {
  style?: React.CSSProperties;
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
  onIndexChange?: (index: number) => void;
}
