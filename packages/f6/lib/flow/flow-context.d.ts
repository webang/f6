import { ReactNode } from 'react';
export interface FlowContext {
    current: number;
    direction: 'horizontal' | 'vertical';
    finishIcon: ReactNode;
    processIcon: ReactNode;
    waitingIcon: ReactNode;
}
export declare const FlowContext: import("react").Context<FlowContext | null>;
