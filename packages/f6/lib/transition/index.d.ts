/// <reference types="react" />
import './index.less';
export declare type TransitionType = 'f6-scale-fade';
declare const Transition: React.FC<{
    type: TransitionType;
    in?: boolean;
    timeout: number;
    appear?: boolean;
}>;
export default Transition;
