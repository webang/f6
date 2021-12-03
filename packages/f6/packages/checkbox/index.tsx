import Checkbox from './checkbox';
import Group from './checkbox-group';
import './index.less';

export { default as CheckboxProps } from './checkbox';
export { default as CheckboxGroupProps } from './checkbox-group';

type ICheckbox = typeof Checkbox & { Group: typeof Group };

(Checkbox as ICheckbox).Group = Group;

export default Checkbox as ICheckbox;