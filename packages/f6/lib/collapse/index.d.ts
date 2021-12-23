import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
export type { CollapseProps } from './collapse';
export type { CollapseItemProps } from './collapse-item';
import './index.less';
declare type ICollapse = (typeof Collapse) & {
    Item: (typeof CollapseItem);
};
declare const _default: ICollapse;
export default _default;
