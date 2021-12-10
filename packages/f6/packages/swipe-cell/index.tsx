import { defineName } from "../utils/name";
import { FC } from "react";
import classNames from "classnames";
import './index.less';

// https://youzan.github.io/vant/#/zh-CN/swipe-cell

export interface SwipeCellProps {
  className?: string;
  right: React.ReactNode;
}

const [prefix] = defineName("swipe-cell");

const SwipeCell: FC<SwipeCellProps> = (p) => {
  const { className, children, right } = p;
  const mCls = classNames([prefix, className]);

  const startHandler = () => {

  }

  const moveHandler = () => {

  }

  const endHandler = () => {

  }

  return (
    <div className={mCls}>
      <div className={`${prefix}-wrapper`}>
        <div className={`${prefix}__left`}></div>
        {children}
        <div className={`${prefix}__right`}>{right}</div>
      </div>
    </div>
  );
};

export default SwipeCell;