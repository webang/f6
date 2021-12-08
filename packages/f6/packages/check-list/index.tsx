import CheckList from './check-list';
import CheckListItem from './check-item';
import './index.less';

export type { CheckListProps } from './check-list';
export type { CheckListItemProps } from './check-item';

export { CheckList, CheckListItem }

type ICheckList = typeof CheckList & {
    Item: typeof CheckListItem
}

((CheckList as ICheckList).Item) = CheckListItem;

export default CheckList as ICheckList;