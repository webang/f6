import React, { ReactNode } from "react";
import classNames from "classnames";
import { defineName } from "../utils/name";
import "./index.less";

export interface CellProps {
  className?: string;
  title: ReactNode;
  label?: ReactNode;
  value?: ReactNode;
  icon?: ReactNode;
  bodyStyle?: React.CSSProperties;
  border?: boolean;
  link?: boolean;
  url?: string;
  onClick?: React.MouseEventHandler<Element>
}

const [prefix] = defineName("cell");

const Cell: React.FC<CellProps> = ({
  className,
  title,
  label,
  value,
  link,
  onClick,
  icon,
  border = true,
  bodyStyle = {},
}) => {
  const mCls = classNames([prefix, className], {
    [`${prefix}--border`]: border,
    [`hairline`]: border,
  });

  const handleClick: React.MouseEventHandler<Element> = (event) => {
    onClick && onClick(event);
  };

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <div className={`${prefix}__icon`}>
        {icon}
      </div>
    )
  };

  const renderTitle = () => {
    if (!title && !icon) return null;
    return (
      <div className={prefix + "__title"}>
        {renderIcon()}
        <span>{title}</span>
      </div>
    )
  }

  return (
    <div className={mCls} onClick={handleClick}>
      <div className={`${prefix}__head`}>
        {renderTitle()}
        <div className={prefix + "__value"}>{value}</div>
        {link && (
          <img
            className={prefix + "__arrow"}
            src={require("../svg/arrow_right.svg").default}
            alt=""
          />
        )}
      </div>
      <div className={`${prefix}__body`} style={bodyStyle}>
        {label && <div className={prefix + "__label"}>{label}</div>}
      </div>
    </div>
  );
};

export const CellGroup: React.FC = ({ children }) => {
  const [prefix] = defineName("cell-group");
  return <div className={prefix}>{children}</div>;
};

type ICell = typeof Cell & { Group: typeof CellGroup };

(Cell as ICell).Group = CellGroup;

export default Cell as ICell;