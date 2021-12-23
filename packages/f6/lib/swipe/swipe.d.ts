/// <reference types="node" />
import React from "react";
import { SwipeProps } from "./interface";
declare class Swipe extends React.Component<SwipeProps, {}> {
    constructor(props: SwipeProps);
    static defaultProps: Partial<SwipeProps>;
    state: {
        translate: number;
    };
    store: {
        width: number;
        height: number;
        size: number;
        startX: number;
        startY: number;
        startTranslate: number;
        startTime: number;
        diffX: number;
        diffY: number;
        diff: number;
        isTouched: boolean;
        gridIndex: number;
        maxTranslate: number;
        maxGridIndex: number;
        minGridIndex: number;
        minTranslate: number;
        initialized: boolean;
        slides: HTMLDivElement[];
        slidesGrid: number[];
        isLoop: boolean;
        useAnimate: boolean;
        timeId: NodeJS.Timeout;
        isHorizontal: boolean;
        rectProp: "width" | "height";
    };
    private wrapperRef;
    private containerRef;
    private moveHandler;
    private startHandler;
    private endHandler;
    private onMount;
    initSlides: () => void;
    slideTo: (index: number, animate?: boolean) => void;
    slideNext: () => void;
    slidePrev: () => void;
    setTranslate: (dest: number) => void;
    stop: () => void;
    play: () => void;
    createLoopEl(): void;
    private initEvents;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Swipe;
