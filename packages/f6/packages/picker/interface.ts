import { ReactNode } from "react";
import { PickerRef } from "./Picker";
import PickerColumn from "./PickerColumn";

export interface IOnMounted {
  (pickerColumn: PickerColumn, index: number): void;
}

export interface IOnDestroyed {
  (pickerColumn: PickerColumn, index: number): void;
}

export interface IOnChange {
  (index: number, value: number, columns: IPickerOption[], picker: PickerRef): void;
}

export interface IOnColumnChange {
  (index: number, value: number, columns: IPickerOption[], picker: PickerColumn): void;
}

export interface IPickerOption {
  label: string;
  value: string | number;
  children?: IPickerOption[];
}

export interface OptionRender {
  (option: { option: IPickerOption, selected: boolean; }): ReactNode;
}

export type IPickerColumn = IPickerOption[];

export type IPickerColumns = IPickerColumn[];