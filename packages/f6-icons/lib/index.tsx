import { CSSProperties, FC } from 'react';
import '../iconfont/iconfont.css';
import { IconType } from './interface';
export interface IconProps {
  name: IconType;
  className?: string;
  style?: CSSProperties;
}
const Icon: FC<IconProps> = ({
  name,
  className,
  ...restProps
}) => {
  const cls = `wax-icon yus-icon yus-icon-${name} ${className}`
  return <span className={cls} {...restProps}></span>
}

export default Icon;