import { FC } from "react";
export interface SwipeProps {
    direction?: 'horizontal' | 'vertical';
    loop?: boolean;
    speed?: number;
    activeIndex?: number;
    autoplay?: number;
    delay?: number;
    effect?: 'slide' | 'scale';
    spaceBetween?: number;
    width: number;
    height: number;
}
declare const Swipe: FC<SwipeProps>;
export default Swipe;
