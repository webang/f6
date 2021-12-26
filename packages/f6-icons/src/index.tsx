import React, { CSSProperties, FC } from 'react';
import './iconfont/iconfont.css';
import { IconType } from './interface';
export interface IconProps {
  name: IconType;
  className?: string;
  style?: CSSProperties;
  onClick?: Function;
}
const Icon: FC<IconProps> = ({
  name,
  className,
  onClick,
  ...restProps
}) => {
  const cls = `wax-icon yus-icon yus-icon-${name} ${className}`;
  const handleClick = () => onClick?.();
  return <span onClick={handleClick} className={cls} {...restProps}></span>
}

export default Icon;