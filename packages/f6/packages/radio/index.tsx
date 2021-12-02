import Group from './group';
import Radio from './radio';

export type { RadioProps, RadioValue } from './radio';
export type { RadioGroupProps } from './group';

type IRadio = typeof Radio & { Group: typeof Group };

(Radio as IRadio).Group = Group;

export default Radio as IRadio;