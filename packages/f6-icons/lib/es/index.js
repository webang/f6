import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './iconfont/iconfont.css';

const Icon = ({
  name,
  className,
  onClick,
  ...restProps
}) => {
  const cls = `wax-icon yus-icon yus-icon-${name} ${className}`;

  const handleClick = () => onClick === null || onClick === void 0 ? void 0 : onClick();

  return _jsx("span", {
    onClick: handleClick,
    className: cls,
    ...restProps
  }, void 0);
};

export default Icon;