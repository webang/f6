import { defineName } from "../utils/name";
import { FC, useState } from "react";
import Popup from "../popup";
import CascaderView, { CascaderViewOption } from "./cascader-view";
import "./index.less";

export interface CascaderProps {
  options: CascaderViewOption[];
  visible: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  value?: string[];
}

const [prefix] = defineName("cascader");

const Cascader: FC<CascaderProps> = (props) => {
  const { visible, options } = props;
  const [columns, setColumns] = useState([options]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<CascaderViewOption[]>([]);

  const onClick = (option: CascaderViewOption, index: number) => {
    if (!selected[index]) {
      setSelected((prev) => [...prev, option]);
      if (option.children && option.children.length) {
        setColumns((prev) => [...prev, option.children || []]);
        setCurrent(index + 1);
      }
    } else {
      let list = selected.map((it, i) => (i === index ? option : it));
      list = list.filter((_, i) => i <= index);
      setSelected(list);
      {
        let list = columns.filter((it, i) => i <= index);
        if (option.children && option.children.length) {
          list.push(option.children || []);
          setCurrent(index + 1);
        }
        setColumns(list);
      }
    }
  };

  const renderTabs = () => {
    const renderChoose = () => {
      const choose = (
        <span
          onClick={() => {
            setCurrent(columns.length - 1);
          }}
          className={`${prefix}__tab-item`}
        >
          请选择
        </span>
      );
      if (selected.length < columns.length) {
        return choose;
      }
      return null;
    };

    return (
      <div className={`${prefix}__tab`}>
        {selected.map((it, index) => {
          return (
            <span
              onClick={() => {
                setCurrent(index);
              }}
              key={index}
              className={`${prefix}__tab-item`}
            >
              {it.label}
            </span>
          );
        })}
        {renderChoose()}
      </div>
    );
  };

  if (!visible) return null;

  return (
    <Popup position={"bottom"} visible={visible}>
      {renderTabs()}
      {columns.map((it, index) => (
        <CascaderView
          key={index}
          style={{
            display: index === current ? "block" : "none",
          }}
          options={it}
          onClick={(it) => {
            onClick(it, index);
          }}
        />
      ))}
    </Popup>
  );
};

export default Cascader;