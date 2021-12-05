import Checkbox from './checkbox';
import Group from './checkbox-group';
import './index.less';
export { default as CheckboxProps } from './checkbox';
export { default as CheckboxGroupProps } from './checkbox-group';
declare type ICheckbox = typeof Checkbox & {
    Group: typeof Group;
};
declare const _default: ICheckbox;
export default _default;
