import { FC } from "react";
import { defineName } from "packages/utils/name";
import classNames from "classnames";

const [prefix] = defineName('prefix');

export interface DropdownMenuProps {
  className?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  className
}) => {
  const mCls = classNames([className, prefix]);

  return (
    <div className={mCls}>
      
    </div>
  )
}

export default DropdownMenu; 