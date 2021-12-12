import MarqueeItem from "./marquee-item";
import Marquee from "./marquee";
import './index.less';

export type { MarqueeProps } from "./marquee";
export type { MarqueeItemProps } from "./marquee-item";

type IMarquee = typeof Marquee & {
  Item: typeof MarqueeItem;
};

(Marquee as IMarquee).Item = MarqueeItem;

export default Marquee as IMarquee;