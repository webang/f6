import { defineName } from "../utils/name";
import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.less";
import Icon from "f6-icons";

export interface NavBarProps {
  left?: ReactNode;
  right?: ReactNode;
  backText?: ReactNode;
  backArrow?: boolean | ReactNode;
  children?: ReactNode;
  onBack?: () => void;
}

const [prefix] = defineName("nav-bar");

const NavBar: React.FC<NavBarProps> = (p) => {
  const {
    children,
    onBack,
    left,
    right,
    backArrow = true,
    backText = "返回",
  } = p;

  const leftNode = left ? (
    left
  ) : (
    <div className={`${prefix}-back-button`} onClick={onBack}>
      {backArrow && (
        <Icon className={`${prefix}-back-arrow`} name="arrow-left" />
      )}
      <div className={`${prefix}-back-text`}>{backText}</div>
    </div>
  );

  return (
    <div className={classNames([prefix])}>
      <div className={`${prefix}-left`}>{leftNode}</div>
      <div className={`${prefix}-title`}>{children}</div>
      <div className={`${prefix}-right`}>{right}</div>
    </div>
  );
};

export default NavBar;
