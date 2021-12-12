import { defineName } from "../utils/name";
import { FC } from "react";

export interface MarqueeItemProps {

}

const [prefix] = defineName('marquee-item');

const MarqueeItem: FC<MarqueeItemProps> = ({
  children
}) => {
  return (
    <div className={prefix}>
      {children}
    </div>
  );
};


export default MarqueeItem;