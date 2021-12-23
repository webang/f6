declare type UseValueParams<T> = {
    value?: T;
    defaultValue: T;
    onChange?: (val: T) => void;
};
export declare function usePropsValue<T>(p: UseValueParams<T>): readonly [T, (v: T) => void];
export {};
