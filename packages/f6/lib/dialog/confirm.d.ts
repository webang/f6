import { DialogProps } from ".";
export declare type ConfirmDialogProps = Omit<DialogProps, "visible" | "showCancelButton" | "showConfirmButton">;
export declare function confirm(props: ConfirmDialogProps): Promise<unknown>;
