import React from "react";
import "./index.less";
import { CSSTransition } from "react-transition-group";
import { defineName } from "../utils/name";

export interface OverlayProps {
  visible?: boolean;
  timeout?: number;
  transitionName?: string;
  onClick?: () => void;
}

const [prefix] = defineName("overlay");

const Overlay: React.FC<OverlayProps> = ({
  visible = false,
  timeout = 300,
  transitionName = "fade",
  children,
  onClick,
}) => {
  const style = {
    transitionDuration: `${timeout}ms`,
  };

  return (
    <CSSTransition
      in={visible}
      timeout={timeout}
      classNames={transitionName}
      unmountOnExit
    >
      <div onClick={() => onClick?.()} className={prefix} style={style}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Overlay;
