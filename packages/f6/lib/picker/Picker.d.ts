/// <reference types="react" />
import { IOnChange, IPickerColumn, IPickerColumns, OptionRender } from "./interface";
export interface PickerProps {
    columns: IPickerColumns;
    onChange?: IOnChange;
    defaultIndex?: number[];
    cascade?: boolean;
    maxLength?: number;
    optionRender?: OptionRender;
}
export interface PickerRef {
    slideTo: (index: number, value: number, animation: boolean) => void;
    setOptions: (columns: IPickerColumns) => void;
    getOptions: () => IPickerColumns;
    setColumnOptions: (index: number, options: IPickerColumn) => void;
    getColumnOptions: (index: number) => IPickerColumn;
    setIndex: (list: number[]) => void;
    getIndex: () => number[];
    setColumnIndex: (index: number, value: number) => void;
    getColumnIndex: (index: number) => number;
    getValues: () => IPickerColumn;
}
declare const _default: import("react").ForwardRefExoticComponent<PickerProps & import("react").RefAttributes<PickerRef>>;
export default _default;
