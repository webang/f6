import { DialogProps } from ".";
export declare type AlertDialogProps = Omit<DialogProps, "visible" | "showCancelButton" | "showConfirmButton" | "onCancel" | "cancelText">;
export declare function alert(props: AlertDialogProps): Promise<any>;
