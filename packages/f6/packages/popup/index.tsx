import React from "react";
import "./index.less";
import { CSSTransition } from "react-transition-group";
import Overlay from "../overlay";
import classNames from "classnames";
import { defineName } from "../utils/name";

export interface PopupProps {
  visible?: boolean;
  position?: Direction;
  animationDuration?: number;
}

export type Direction = "top" | "bottom" | "left" | "right" | "middle";

const prefix = defineName("popup");

const Popup: React.FC<PopupProps> = ({
  children,
  visible,
  animationDuration = 300,
  position = "top",
}) => {
  return (
    <>
      <Overlay visible={visible} />
      <CSSTransition
        classNames={"wax-slide-" + position}
        in={visible}
        unmountOnExit
        timeout={animationDuration}
      >
        <div
          style={{ transitionDuration: `${animationDuration}ms` }}
          className={classNames([prefix, prefix + "--" + position])}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

export default Popup;