import Flow from "./flow";
import FlowItem from "./flow-item";
import './index.less';

export type { FlowProps } from './flow';
export type { FlowItemProps } from './flow-item'

type IFlow = typeof Flow & {
  Item: typeof FlowItem
}

(Flow as IFlow).Item = FlowItem;

export default Flow;