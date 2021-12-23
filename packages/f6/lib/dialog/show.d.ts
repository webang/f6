import { DialogProps } from ".";
export declare type DialogShowProps = Omit<DialogProps, "visible">;
export declare type DialogShowRef = {
    close: () => void;
    forceClose: () => void;
};
export declare function show(props: DialogShowProps): {
    close: () => void;
    forceClose: () => void;
};
