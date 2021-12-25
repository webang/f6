import { defineName } from "../utils/name";
import React, { FC } from "react";
import { FlowContext } from "./flow-context";
import classNames from "classnames";

export interface FlowProps extends FlowContext {
}

const [prefix] = defineName("flow");

const defaultProps = {
  direction: 'horizontal',
  current: 0
}

const Flow: FC<FlowProps> = ({ children, ...restProps }) => {
  const p = { ...defaultProps, ...restProps}
  return (
    <div
      className={classNames([prefix], {
        [`${prefix}--${p.direction}`]: true,
      })}
    >
      <FlowContext.Provider value={p}>{children}</FlowContext.Provider>
    </div>
  );
};

export default Flow;