import React, { ReactNode, FC } from "react";
import "./index.less";
export interface DialogProps {
    visible?: boolean;
    title?: React.ReactNode;
    content?: React.ReactNode;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    animationDuration?: number;
    okText?: ReactNode;
    cancelText?: ReactNode;
    appear: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    onClose?: () => (void | boolean);
    onClosed?: () => void;
}
declare const Dialog: FC<DialogProps>;
export default Dialog;
