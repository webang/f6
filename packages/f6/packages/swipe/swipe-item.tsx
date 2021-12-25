import { defineName } from "../utils/name";
import React, { FC } from "react";

export interface SwipeItemProps {

}

const [prefix] = defineName('swipe-item')

const SwipeItem: FC<SwipeItemProps> = ({ children }) => {
  return (
    <div className={prefix}>
      {children}
    </div>
  );
};

export default SwipeItem;