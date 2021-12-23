import SwipeItem from "./swipe-item";
import Swipe from "./swipe";
import './index.less';
export type { SwipeProps } from './swipe';
export type { SwipeItemProps } from './swipe-item';
declare type ISwipe = typeof Swipe & {
    Item: typeof SwipeItem;
};
declare const _default: ISwipe;
export default _default;
