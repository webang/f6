import MarqueeItem from "./marquee-item";
import Marquee from "./marquee";
import './index.less';
export type { MarqueeProps } from "./marquee";
export type { MarqueeItemProps } from "./marquee-item";
declare type IMarquee = typeof Marquee & {
    Item: typeof MarqueeItem;
};
declare const _default: IMarquee;
export default _default;
