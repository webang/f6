import { FC } from "react";
export interface MarqueeProps {
    interval?: number;
    duration?: number;
    itemHeight?: number;
}
declare const Marquee: FC<MarqueeProps>;
export default Marquee;
