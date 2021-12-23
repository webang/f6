import React, { CSSProperties } from "react";
import "./index.less";
import { CSSTransition } from "react-transition-group";
import Overlay from "../overlay";
import classNames from "classnames";
import { defineName } from "../utils/name";

export interface PopupProps {
  style?: CSSProperties;
  visible?: boolean;
  position?: Direction;
  className?: string;
  animationDuration?: number;
  onMaskClick?: () => void;
}

export type Direction = "top" | "bottom" | "left" | "right" | "middle";

const prefix = defineName("popup");

const Popup: React.FC<PopupProps> = ({
  children,
  visible,
  animationDuration = 300,
  position = "bottom",
  style = {},
  className,
  onMaskClick
}) => {
  return (
    <>
      <Overlay visible={visible} onClick={onMaskClick}/>
      <CSSTransition
        classNames={"wax-slide-" + position}
        in={visible}
        unmountOnExit
        timeout={animationDuration}
      >
        <div
          style={{ ...style, transitionDuration: `${animationDuration}ms` }}
          className={classNames([prefix, className, prefix + "--" + position])}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

export default Popup;