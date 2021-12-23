import { FC, ReactNode } from "react";
import "./index.less";
export interface ActionItem {
    title: ReactNode;
    desc?: ReactNode;
    render?: () => ReactNode;
}
export interface ActionSheetProps {
    className?: string;
    title?: ReactNode;
    actions?: ActionItem[];
    visible: boolean;
    borderRadiusSize: number;
    onClose?: () => void;
    callback?: (index: number) => void;
    cancelText?: string;
}
declare const ActionSheet: FC<ActionSheetProps>;
export default ActionSheet;
