import { CSSProperties, FC, ReactNode } from "react";
import './index.less';
export interface MessageProps {
    type?: 'primary' | 'success' | 'warning' | 'danger';
    icon?: ReactNode;
    link?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const Message: FC<MessageProps>;
export default Message;
