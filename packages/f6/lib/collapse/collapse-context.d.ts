/// <reference types="react" />
export interface CollapseContext {
    openKeys: string[];
    check: (val: string) => void;
    uncheck: (val: string) => void;
}
export declare const CollapseContext: import("react").Context<CollapseContext | null>;
