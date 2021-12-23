import React from "react";
import "./index.less";
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
declare const Slider: React.FC<SliderProps>;
export default Slider;
