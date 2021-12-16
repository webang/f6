import React, { ReactNode } from "react";
import classNames from "classnames";
import { defineName } from "../utils/name";
import "./index.less";

export interface CellProps {
  className?: string;
  title: ReactNode;
  titleClass?: string;
  label?: ReactNode;
  value?: ReactNode;
  icon?: ReactNode;
  bodyStyle?: React.CSSProperties;
  border?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<Element>;
}

const [prefix] = defineName("cell");

const Cell: React.FC<CellProps> = ({
  className,
  title,
  titleClass,
  label,
  value,
  link,
  onClick,
  icon,
  border = true,
  bodyStyle = {},
}) => {
  const mCls = classNames([className], {
    [prefix]: true,
    [`hairline-bottom`]: border,
  });

  const handleClick: React.MouseEventHandler<Element> = (event) => {
    onClick && onClick(event);
  };

  const renderIcon = () => {
    if (!icon) return null;
    return <div className={`${prefix}__icon`}>{icon}</div>;
  };

  const renderTitle = () => {
    if (!title && !icon) return null;
    const cls = classNames([titleClass, `${prefix}__title`])
    return (
      <div className={cls}>
        {renderIcon()}
        <span>{title}</span>
      </div>
    );
  };

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

export default Cell;
