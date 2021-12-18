import { defineName } from "../utils/name";
import { FC, useEffect, useState } from "react";
import Popup from "../popup";
import CascaderView, { CascaderViewOption } from "./cascader-view";
import "./index.less";
import Button from "../button";

export interface CascaderProps {
  options: CascaderViewOption[];
  visible?: boolean;
  defaultValue?: string[];
  onClose?: () => void;
  onConfirm?: (val: CascaderViewOption[]) => void;
}

const [prefix] = defineName("cascader");

const getInitData = (options: CascaderProps["options"], value: CascaderProps["defaultValue"] = []) => {
  const rValue = [];
  const columns = [options];

  for (let i = 0; i < value.length; i++) {
    const val = value[i];
    const item = columns[i].find((it) => it.value === val);
    if (item) {
      rValue.push(item);
      if (i < value.length - 1) {
        columns.push(item.children || [])
      }
    } else {
      return {
        columns: [options],
        value: []
      }
    }
  }

  return {
    columns: columns,
    value: rValue
  }
};

const Cascader: FC<CascaderProps> = (props) => {
  const { visible, options, onClose, onConfirm } = props;
  const [current, setCurrent] = useState<number>(0);
  const [columns, setColumns] = useState<CascaderViewOption[][]>([]);
  const [selected, setSelected] = useState<CascaderViewOption[]>([]);

  useEffect(() => {
    const { columns, value } = getInitData(options, props.defaultValue);
    setColumns(columns);
    setSelected(value);
    setCurrent(columns.length - 1);
  }, [])

  const onClick = (option: CascaderViewOption, index: number) => {
    const hasChild = option.children && option.children.length;

    if (!selected[index]) {
      setSelected((prev) => [...prev, option]);
      if (hasChild) {
        setColumns((prev) => [...prev, option.children!]);
        setCurrent(index + 1);
      }
    } else {
      const mSelected = selected.map((it, i) => (i === index ? option : it)).filter((_, i) => i <= index);
      const mColumns = columns.filter((_, i) => i <= index);

      setSelected(mSelected);
      setCurrent(hasChild ? index + 1 : index);
      setColumns(hasChild ? [...mColumns, option.children!] : mColumns);
    }
  };

  const renderChoose = () => {
    const choose = (
      <span
        onClick={() => setCurrent(columns.length - 1)}
        className={`${prefix}__tab-item`}
      >
        请选择
      </span>
    );
    return selected.length < columns.length ? choose : null;
  };

  const renderTabs = () => {
    const list = selected.map((it, index) => {
      return (
        <span
          onClick={() => setCurrent(index)}
          key={index}
          className={`${prefix}__tab-item`}
        >
          {it.label}
        </span>
      );
    });
    return (
      <>
        <div className={`${prefix}-header`}>
          <Button fill="none" onClick={() => onClose?.()}>
            取消
          </Button>
          <Button fill="none" onClick={() => onConfirm?.(selected)}>
            确认
          </Button>
        </div>
        <div className={`${prefix}__tab`}>
          {list}
          {renderChoose()}
        </div>
      </>
    );
  };

  const views = columns.map((it, index) => (
    <CascaderView
      key={index}
      style={{ display: index === current ? "block" : "none" }}
      options={it}
      onClick={(it) => onClick(it, index)}
      value={selected[index]}
    />
  ));

  return (
    <Popup position={"bottom"} visible={visible}>
      {renderTabs()}
      {views}
    </Popup>
  );
};

export default Cascader;