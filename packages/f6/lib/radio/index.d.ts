import Group from './group';
import Radio from './radio';
export type { RadioProps, RadioValue } from './radio';
export type { RadioGroupProps } from './group';
declare type IRadio = typeof Radio & {
    Group: typeof Group;
};
declare const _default: IRadio;
export default _default;
