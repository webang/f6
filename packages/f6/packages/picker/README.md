---
category: Components
title: Picker
subTitle: 选择器
---

### 介绍

`Picker` 仿 IOS 客户端 `Picker` 的效果，以便 IOS 和 Android 统一。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| columns | 初始状态选项 | `IPickerColumn[]` | `[]` |
| defaultIndex | 初始默认选中的索引 | `number[]` | - |
| cascade | 是否联动 | boolean | false |
| maxLength | 最大联动级数 | number | 3 |
| onChange | 某列选中值发生变化时调用 | `IOnChange` | - |

```tsx
export interface PickerProps {
  columns: IPickerColumns;
  onChange?: IOnChange;
  defaultIndex?: number[];
  cascade?: boolean;
  maxLength?: number;
  optionRender?: OptionRender;
}

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
```

### Refs

| 属性 | 说明 | 签名 |
| :-  | :- | :- |
| setOptions | 设置选项 | `(columns: IPickerColumns) => void` |
| getOptions | 获取选项 | `() => IPickerColumns` |
| setIndex | 设置选中索引 | `(list: number[]) => void` |
| getIndex | 获取选中索引 | `() => number[]` |
| setColumnIndex | 设置某列索引 | `(index: number, value: number) => void` |
| getColumnIndex | 获取某列索引 | `(index: number) => number` |
| setColumnOptions | 设置某列选项 | `(index: number, options: IPickerColumn) => void` |
| getColumnOptions | 获取某列选项 | `(index: number) => IPickerColumn` |
| getValues | 获取选中值 | `() => IPickerColumn` |

```tsx
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
```