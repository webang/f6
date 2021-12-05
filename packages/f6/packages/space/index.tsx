import { defineName } from "../utils/name";
import { Children, FC } from "react";
import './index.less';
import classNames from "classnames";

const [prefix] = defineName("space");

export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  wrap?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Space: FC<SpaceProps> = ({ children, wrap = true, direction = 'horizontal' }) => {
  const mCls = classNames([prefix], {
    [`${prefix}-${direction}`]: true,
    [`${prefix}-wrap`]: wrap
  });
  const mChildren = Children.toArray(children).map((it) => {
    return <div className={`${prefix}-item`}>{it}</div>;
  });
  return <div className={mCls}>{mChildren}</div>;
};

export default Space;