import Collapse from "./collapse";
import CollapseItem from "./collapse-item";

export type { CollapseProps } from './collapse';
export type { CollapseItemProps } from './collapse-item';

import './index.less';

type ICollapse = (typeof Collapse) & {
  Item: (typeof CollapseItem)
}

(Collapse as ICollapse).Item = CollapseItem;

export default Collapse as ICollapse;