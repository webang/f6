/// <reference types="react" />
import { RadioValue } from './radio';
export interface IGroupContext {
    value?: RadioValue | null;
    disabled?: boolean;
    setValue: (val: RadioValue | null) => void;
}
export declare const RadioGroupContext: import("react").Context<IGroupContext | null>;
