import { defineName } from "../utils/name";
import { CSSProperties, FC, ReactNode } from "react";
import classNames from "classnames";
import Icon from "f6-icons";

export interface CascaderViewOption {
  label: string;
  value: string;
  children?: CascaderViewOption[];
}

export interface CascaderViewProps {
  style?: CSSProperties;
  options?: CascaderViewOption[];
  onClick?: (option: CascaderViewOption) => void;
  optionRender?: (option: CascaderViewOption) => ReactNode;
  value?: CascaderViewOption;
}

const [prefix] = defineName("cascader-view");

const CascaderView: FC<CascaderViewProps> = (props) => {
  const { options = [], onClick, style = {}, value } = props;

  const renderItem = (it: CascaderViewOption, index: number) => {
    const isChecked = value === it;
    const itemCls = classNames({
      ['hairline']: true,
      ['border-b']: true,
      [`${prefix}-option`]: true,
      [`${prefix}-selected`]: isChecked
    });
    const labelCls = classNames({
      [`${prefix}-label`]: true,
      [`${prefix}-label-selected`]: isChecked
    });

    return (
      <div
        key={index}
        onClick={() => onClick?.(it)}
        className={itemCls}
      >
        <div className={labelCls}>{it.label}</div>
        {isChecked && <Icon className={`${prefix}-option-icon`} name="success3" /> }
      </div>
    );
  };

  return (
    <div className={prefix} style={style}>
      {options.map((it, index) => renderItem(it, index))}
    </div>
  );
};

export default CascaderView;