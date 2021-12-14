import Cell from './cell';
import Group from './group';

import "./index.less";

export type { CellProps } from './cell';

type ICell = typeof Cell & { Group: typeof Group };

(Cell as ICell).Group = Group;

export default Cell as ICell;