import { CSSProperties, FC } from 'react';
import './iconfont/iconfont.css';
import { IconType } from './interface';
export interface IconProps {
    name: IconType;
    className?: string;
    style?: CSSProperties;
    onClick?: Function;
}
declare const Icon: FC<IconProps>;
export default Icon;
