import { defineName } from "../utils/name";
import React, { FC, useContext } from "react";
import { MarqueeContext } from "./context";

export interface MarqueeItemProps {}

const [prefix] = defineName("marquee-item");

const MarqueeItem: FC<MarqueeItemProps> = ({ children }) => {
  const context = useContext(MarqueeContext);
  const height = context?.itemHeight || 0;
  return (
    <div
      className={prefix}
      style={{
        height,
      }}
    >
      {children}
    </div>
  );
};

export default MarqueeItem;
