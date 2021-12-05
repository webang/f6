import { defineName } from "../utils/name";
import { CSSProperties, FC, ReactNode } from "react";

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
}

const [prefix] = defineName("cascader-view");

const CascaderView: FC<CascaderViewProps> = (props) => {
  const { options = [], onClick, style = {} } = props;
  return (
    <div className={prefix} style={style}>
      {options.map((it) => {
        return <div onClick={() => onClick?.(it)} className={`${prefix}-option`}>
          <div className={`${prefix}-label`}>{it.label}</div>
        </div>;
      })}
    </div>
  );
};

export default CascaderView;