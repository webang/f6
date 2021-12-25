import { defineName } from "../utils/name";
import React, { FC, useState } from "react";
import classNames from "classnames";
import { CollapseContext } from "./collapse-context";

export interface CollapseProps {
  className?: string;
  defaultOpenKeys: string[];
  multiple?: boolean;
}

const [prefix] = defineName('collapse')

const Collapse: FC<CollapseProps> = p => {
  const { className, multiple, children, defaultOpenKeys } = p;
  const mCls = classNames([className, prefix]);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys ? defaultOpenKeys : []);

  const check = (val: string) => {
    if (multiple) {
      setOpenKeys(prev => [...prev, val])
    } else {
      setOpenKeys([val])
    }
  }

  const uncheck = (val: string) => {
    if (multiple) {
      setOpenKeys(prev => prev.filter(it => it !== val))
    } else {
      setOpenKeys([])
    }
  }

  return (
    <div className={mCls}>
      <CollapseContext.Provider value={{
        openKeys,
        check,
        uncheck
      }}>
        {children}
      </CollapseContext.Provider>
    </div>
  )
}

export default Collapse;