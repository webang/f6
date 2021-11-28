import React, { ReactNode } from "react";
import "./index.less";
export interface DialogProps {
    visible?: boolean;
    title?: string;
    message?: string | React.ReactElement;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    animationDuration?: number;
    okText?: ReactNode;
    cancelText?: ReactNode;
    appear: boolean;
    onOk?: () => boolean | Promise<boolean>;
    onCancel?: () => boolean | Promise<boolean>;
    afterClose?: () => void;
}
export interface DialogRef {
    show: () => void;
    close: () => void;
}
declare const _default: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<DialogRef>>;
export default _default;
