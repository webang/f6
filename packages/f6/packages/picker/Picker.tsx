import { useImperativeHandle, ForwardRefRenderFunction, useEffect, useRef, useState, forwardRef } from "react";
import { IOnChange, IOnColumnChange, IPickerColumn, IPickerColumns, OptionRender } from "./interface";
import { defineName } from "../utils/name";
import PickerColumn from "./PickerColumn";

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

const [prefix] = defineName('picker');

const Picker: ForwardRefRenderFunction<PickerRef, PickerProps> = ({
  columns = [],
  cascade = false,
  maxLength = 3,
  optionRender,
  defaultIndex,
  onChange,
}, ref) => {
  const [mColumns, setMColumns] = useState<IPickerColumns>([]);
  const childrenRef = useRef<PickerColumn[]>([]);

  useEffect(() => {
    setMColumns(columns)
  }, []);

  const slideTo: PickerRef['slideTo'] = (columnIndex, columnValue, animation = true) => {
    const children = childrenRef.current;
    const child = children[columnIndex];
    child.slideTo(columnValue, animation);
  }

  // 设置所有选项
  const setOptions = (columns: IPickerColumns) => {
    const children = childrenRef.current;
    setMColumns(columns);
    columns.forEach((it, index) => {
      children[index].setOptions(it)
    })
  }

  // 获取所有选项
  const getOptions = () => {
    const children = childrenRef.current;
    return children.map((it) => it.getOptions());
  }

   // 设置某列的选项
  const setColumnOptions: PickerRef['setColumnOptions'] = (index, options) => {
    const children = childrenRef.current;
    children[index].setOptions(options);
  }

  // 获取某列的选项
  const getColumnOptions = (columnIndex: number) => {
    const children = childrenRef.current;
    return children[columnIndex].getOptions();
  }

  // 设置每一列选中项索引
  const setIndex = (list: number[]) => {
    const children = childrenRef.current;
    children.forEach((it, index) => {
      it.slideTo(list[index], false);
    })
  }

  // 获取每一列选中项索引
  const getIndex = () => {
    const children = childrenRef.current;
    return children.map((it) => it.getIndex());
  }

  // 设置指定列的选中项索引
  const setColumnIndex = (index: number, value: number) => {
    const children = childrenRef.current;
    children[index].slideTo(value, false);
  }

  // 获取指定列的选中项索引
  const getColumnIndex = (index: number) => {
    const children = childrenRef.current;
    return children[index].getIndex();
  }

  // 获取选中的值
  const getValues = () => {
    const children = childrenRef.current;
    return children.map((it) => it.getValue());
  }

  const context = {
    slideTo,
    setOptions,
    getOptions,
    setColumnOptions,
    getColumnOptions,
    setIndex,
    getIndex,
    setColumnIndex,
    getColumnIndex,
    getValues
  }

  useImperativeHandle(ref, () => context);

  const mOnChange: IOnColumnChange = (index, value, columns, pickerColumn) => {
    let list = columns[value]?.children || [];
    if (cascade) {
      for(let i = index + 1; i < maxLength; i++) {
        childrenRef.current[i].setOptions(list);
        childrenRef.current[i].slideTo(0, false);
        list = list[0]?.children || []
      }
    }
    onChange && onChange(index, value, columns, context);
  }

  const renderColumns = () => {
    return mColumns.map((it, index) => {
      return (
        <PickerColumn
          onMounted={(child, index) => {
            const children = childrenRef.current
            children[index] = child;
          }}
          onDestroyed={(_, index) => {
            const children = childrenRef.current
            children.splice(index, 1)
          }}
          optionRender={optionRender}
          onChange={mOnChange}
          key={index}
          index={index}
          columns={it}
          defaultIndex={defaultIndex ? defaultIndex[index] : 0 }
        />
      )
    })
  }

  return (
    <div className={`${prefix}-columns`}>
      {renderColumns()}
    </div>
  )
}

export default forwardRef(Picker);