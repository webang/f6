import { defineName } from "../utils/name";
import React, { FC } from "react";

export interface SwipeItemProps {
  onClick?: () => void;
}

const [prefix] = defineName('swipe-item')

const SwipeItem: FC<SwipeItemProps> = ({ children, ...restProps }) => {
  return (
    <div className={prefix} {...restProps}>
      {children}
    </div>
  );
};

export default SwipeItem;