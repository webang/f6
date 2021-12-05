import { CSSProperties, FC, ReactNode } from "react";
import './index.less';
export interface MessageProps {
    type?: 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    link?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    children?: ReactNode;
}
declare const Message: FC<MessageProps>;
export default Message;
