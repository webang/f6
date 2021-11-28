import React from "react";
import './index.less';
import { IOnColumnChange, IOnDestroyed, IOnMounted, IPickerColumn, OptionRender } from "./interface";
declare class PickerColumn extends React.Component<{
    index: number;
    columns: IPickerColumn;
    onChange?: IOnColumnChange;
    onMounted: IOnMounted;
    onDestroyed: IOnDestroyed;
    defaultIndex?: number;
    optionRender?: OptionRender;
}, {
    currentIndex: number;
    offset: number;
    columns: IPickerColumn;
}> {
    state: {
        currentIndex: number;
        offset: number;
        columns: IPickerColumn;
    };
    ref: React.RefObject<HTMLDivElement>;
    startY: number | undefined;
    startTime: number | undefined;
    currentY: number | undefined;
    duration: number;
    diffY: number;
    private getTouch;
    private formatDistance;
    private onTouchStart;
    private onTouchMove;
    private onTouchEnd;
    private scrollTo;
    changeIndex: (shouldTriggerOnChange?: boolean) => void;
    slideTo: (index: number, animation?: boolean) => void;
    setOptions: (options: IPickerColumn) => void;
    getOptions: () => IPickerColumn;
    getIndex: () => number;
    getValue: () => import("./interface").IPickerOption;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PickerColumn;
