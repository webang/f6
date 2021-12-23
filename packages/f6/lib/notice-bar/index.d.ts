import { FC, ReactNode } from "react";
import "./index.less";
export interface NoticeBarProps {
    text?: ReactNode;
    step?: number;
    start?: number;
}
declare const NoticeBar: FC<NoticeBarProps>;
export default NoticeBar;
