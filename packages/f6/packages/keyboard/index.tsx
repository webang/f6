import { FC } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";

const [prefix] = defineName('keyboard');

export interface KeyboardProps {
  className?: string;
}

const Keyboard: FC<KeyboardProps> = ({
  className
}) => {
  const mCls = classNames([className, prefix]);

  return (
    <div className={mCls}>
      
    </div>
  )
}

export default Keyboard; 