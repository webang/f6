/// <reference types="react" />
import { CheckboxValue } from './checkbox';
export interface CheckboxGroupContext {
    value: CheckboxValue[];
    check: (val: CheckboxValue) => void;
    uncheck: (val: CheckboxValue) => void;
    setValue?: (val: CheckboxValue) => void;
}
export declare const CheckboxGroupContext: import("react").Context<CheckboxGroupContext | null>;
