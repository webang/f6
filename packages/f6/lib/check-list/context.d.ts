import React from 'react';
export interface CheckListContext {
    value: string[];
    check: (val: string) => void;
    uncheck: (val: string) => void;
    renderIcon?: (checked: boolean) => React.ReactNode;
    labelPosition?: 'left' | 'right';
}
export declare const CheckListContext: React.Context<CheckListContext | null>;
