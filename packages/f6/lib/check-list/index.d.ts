import CheckList from "./check-list";
import CheckListItem from "./check-item";
import "./index.less";
export type { CheckListProps } from "./check-list";
export type { CheckListItemProps } from "./check-item";
export { CheckList, CheckListItem };
declare type ICheckList = typeof CheckList & {
    Item: typeof CheckListItem;
};
declare const _default: ICheckList;
export default _default;
