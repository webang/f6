import { defineName } from "../utils/name";
import React, { CSSProperties, FC, ReactElement, ReactNode, cloneElement } from "react";
import classNames from "classnames";
import './index.less';

export interface GridProps {
  className?: string;
  style?: CSSProperties;
  columnNum: number;
}

export interface GridItemProps {
  className?: string;
  icon?: ReactNode;
  text?: ReactNode;
  style?: CSSProperties;
}

const Grid: FC<GridProps> = ({
  className,
  children,
  columnNum = 4,
  ...restProps
}) => {
  const [prefix] = defineName('grid');
  const mCls = classNames([prefix, className]);

  // 过滤飞 GridItem 节点
  const gridChildren = React.Children
    .toArray(children)
    .filter(it => {
      return it && (it as any).type === GridItem;
    });

  const mColumnNum = Math.min(columnNum, gridChildren.length);

  const mChildren = gridChildren.map((child: ReactNode, index: number, array) => {
    const style: CSSProperties = {
      ...((child as any).props.style || {}),
      flexBasis: `${(1 / mColumnNum) * 100}%`,
    }
    return cloneElement(child as ReactElement, { index, style })
  });

  return (
    <div className={mCls} {...restProps}>
      {mChildren}
    </div>
  )
}

const GridItem: FC<GridItemProps> = (props) => {
  const {
    className,
    children,
    icon,
    text,
    ...restProps
  } = props;
  const [prefix] = defineName('grid-item');
  const mCls = classNames([prefix, className, 'hairline']);

  return (
    <div className={mCls} {...restProps}>
      <div className={`${prefix}__body`}>
        <span className={`${prefix}__icon`}>{icon}</span>
        <span className={`${prefix}__text`}>{text}</span>
      </div>
    </div>
  )
}

type IGrid = (typeof Grid) & { Item: typeof GridItem };

(Grid as IGrid).Item = GridItem;

export default Grid as IGrid;