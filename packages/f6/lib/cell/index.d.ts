import Cell from './cell';
import Group from './group';
import "./index.less";
export type { CellProps } from './cell';
declare type ICell = typeof Cell & {
    Group: typeof Group;
};
declare const _default: ICell;
export default _default;
