import SwipeItem from "./swipe-item";
import Swipe from "./swipe";
import './index.less';

export type { SwipeProps } from './swipe'
export type { SwipeItemProps } from './swipe-item';

type ISwipe = typeof Swipe & {
    Item: typeof SwipeItem
}

(Swipe as ISwipe).Item = SwipeItem;

export default Swipe as ISwipe;