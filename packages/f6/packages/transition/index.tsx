import React from 'react';
import { CSSTransition } from "react-transition-group";
import './index.less';

export type TransitionType = 'f6-scale-fade'

const Transition: React.FC<{
  type: TransitionType;
  in?: boolean;
  timeout: number;
  appear?: boolean;
}> = ({ type, in: _in, timeout, children, appear = false }) => {
  return (
    <CSSTransition
      classNames={type}
      in={_in}
      unmountOnExit
      appear={appear}
      timeout={timeout}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;