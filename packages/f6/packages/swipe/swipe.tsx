import React, { CSSProperties } from "react";
import { defineName } from "../utils/name";
import { getPosition } from "../utils/dom";
import Button from "../button";
import { SwipeProps } from "./interface";
import classNames from "classnames";

const SHORT_TOUCH = 250;
const [prefix] = defineName("swipe");

class Swipe extends React.Component<SwipeProps, {}> {
  constructor(props: SwipeProps) {
    super(props);
  }

  public static defaultProps: Partial<SwipeProps> = {
    direction: "horizontal",
    spaceBetween: 0,
    loop: true,
    duration: 300,
  };

  state = {
    current: 0,
    translate: 0,
    gridIndex: 0,
  };

  isHorizontal = this.props.direction === "horizontal";

  store = {
    width: 0,
    height: 0,
    size: 0,
    startX: 0,
    startY: 0,
    startTranslate: 0,
    startTime: 0,
    diffX: 0,
    diffY: 0,
    diff: 0,
    isTouched: false,
    gridIndex: 0,
    maxTranslate: 0,
    maxGridIndex: 0,
    minGridIndex: 0,
    minTranslate: 0,
    initialized: false,
    rectProp: (this.isHorizontal ? "width" : "height") as "width" | "height",
    slides: [] as HTMLDivElement[],
    slidesGrid: [] as number[],
    isLoop: !!this.props.loop,
    useAnimate: false,
    timeId: null as unknown as NodeJS.Timeout,
  };

  private wrapperRef = React.createRef<HTMLDivElement>();
  private containerRef = React.createRef<HTMLDivElement>();

  private moveHandler = (event: React.TouchEvent) => {
    const touch = getPosition(event.type, event);
    const store = this.store;

    store.diffX = touch.clientX - store.startX;
    store.diffY = touch.clientY - store.startY;
    store.diff = this.isHorizontal ? store.diffX : store.diffY;
    store.useAnimate = false;

    this.setState((prev) => {
      return {
        ...prev,
        translate: store.startTranslate + (touch.clientX - store.startX),
      };
    });
  };

  private startHandler = (event: React.TouchEvent) => {
    const touch = getPosition(event.type, event);
    const store = this.store;
    const state = this.state;

    store.startX = touch.clientX;
    store.startY = touch.clientY;
    store.startTime = Date.now();
    store.startTranslate = state.translate;
    store.isTouched = true;
  };

  private endHandler = () => {
    const { store, slideTo } = this;
    if (store.diff === 0) return;

    const deltaTime = Date.now() - store.startTime;

    if (store.diff < 0) {
      if (deltaTime < SHORT_TOUCH) {
        this.slideNext()
      } else {
        if (store.diff < -100) {
          this.slideNext()
        } else {
          slideTo(store.gridIndex);
        }
      }
    } else if (store.diff > 0) {
      if (deltaTime < SHORT_TOUCH) {
        this.slidePrev();
      } else {
        if (store.diff > 100) {
          this.slidePrev();
        } else {
          slideTo(store.gridIndex);
        }
      }
    }

    store.diff = 0;
    store.isTouched = false;
  };

  private onMount = () => {
    const { store, wrapperRef } = this;
    if (!wrapperRef.current) return;

    const wrapperEl = wrapperRef.current;
    const { width, height } = wrapperEl.getBoundingClientRect();

    store.size = this.isHorizontal ? width : height;
    if (this.isHorizontal) {
      wrapperEl.style.width = width + "px";
    } else {
      wrapperEl.style.height = height + "px";
    }

    store.isLoop && this.createLoopEl();
    this.initSlides();
    this.forceUpdate();
    store.initialized = true;
  };

  initSlides = () => {
    const { store, containerRef } = this;
    if (!containerRef.current) return;

    const containerEl = containerRef.current;
    const { spaceBetween } = this.props;
    const children = containerEl.children;
    const list = new Array(children.length).fill(0);

    store.slides = list.map(
      (_, index) => children.item(index) as HTMLDivElement
    );
    store.slidesGrid = new Array(children.length);
    store.slides.forEach((element, index) => {
      element.style[store.rectProp] = store.size + "px";
      if (index !== children.length - 1) {
        if (this.isHorizontal) {
          element.style.marginRight = spaceBetween + "px";
        } else {
          element.style.marginBottom = spaceBetween + "px";
        }
      }
      store.slidesGrid[index] = index * store.size + index * (spaceBetween || 0);
    });

    store.minGridIndex = 0;
    store.maxGridIndex = store.slides.length - 1;
    store.minTranslate = store.slidesGrid[store.minGridIndex];
    store.maxTranslate = store.slidesGrid[store.maxGridIndex];
  };

  slideTo = (index: number, animate = true) => {
    this.store.gridIndex = index;
    this.store.useAnimate = animate;
    this.setTranslate(-this.store.slidesGrid[index]);

    const duration = this.props.duration;
    const maxGridIndex = this.store.maxGridIndex;

    if (this.store.isLoop) {
      if (index === maxGridIndex) {
        setTimeout(() => this.slideTo(1, false), duration);
      }
      if (index === 0) {
        setTimeout(() => this.slideTo(maxGridIndex - 1, false), duration);
      }
    }

    this.store.slides.forEach((it, index) => {
      let cls = it.className.replace(' swipe-item-active', '');
      it.style.transitionDuration = animate ? '300ms' : '0ms';
      if (index === this.store.gridIndex) {
        it.className = cls + ' swipe-item-active';
      } else {
        it.className = cls;
      }
    });
  };

  slideNext = () => {
    this.slideTo(this.store.gridIndex + 1);
  };

  slidePrev = () => {
    this.slideTo(this.store.gridIndex - 1);
  };

  setTranslate = (dest: number) => {
    this.setState({
      translate: dest,
    });
  };

  stop = () => {
    clearInterval(this.store.timeId);
  };

  play = () => {
    this.stop();
    this.store.timeId = setInterval(() => {
      this.slideNext();
    }, 1000);
  };

  createLoopEl() {
    if (!this.containerRef.current) return;
    const innerEl: HTMLDivElement = this.containerRef.current!;

    let first = innerEl.getElementsByClassName("is-first")[0];
    let last = innerEl.getElementsByClassName("is-last")[0];
    if (first) innerEl.removeChild(first);
    if (last) innerEl.removeChild(last);

    let firstEl = innerEl.firstElementChild!.cloneNode(true) as HTMLDivElement;
    firstEl.setAttribute("data-index", "0");
    firstEl.className = firstEl.className + " is-first";

    let lastEl = innerEl.lastElementChild!.cloneNode(true) as HTMLDivElement;
    lastEl.setAttribute("data-index", `${innerEl.children.length - 1}`);
    lastEl.className = lastEl.className + " is-last";

    [].forEach.call(innerEl.children, (element, index) => {
      (element as HTMLDivElement).setAttribute("data-index", `${index}`);
    });
    innerEl.insertBefore(lastEl, innerEl.firstElementChild);
    innerEl.appendChild(firstEl);
  }

  componentDidMount() {
    this.onMount();
    if (this.props.loop) {
      this.slideTo(this.props.activeIndex || 0 + 1, false);
    } else {
      this.slideTo(0, false);
    }
  }

  render() {
    const { moveHandler, startHandler, endHandler } = this;
    const { props, state, store, wrapperRef, containerRef } = this;
    const { children } = this.props;

    const containerStl: CSSProperties = {
      transitionDuration: `${store.useAnimate ? props.duration : 0}ms`,
      [store.rectProp]: `${store.maxTranslate + store.size}px`,
      transform: this.isHorizontal
        ? `translate3d(${state.translate}px, 0, 0)`
        : `translate3d(0, ${state.translate}px, 0)`,
    };

    const wrapperCls = classNames({
      [prefix]: true,
      ['effect-' + this.props.effect]: true,
      ['is-vertical']: !this.isHorizontal,
      ['is-horizontal']: this.isHorizontal
    })

    return (
      <div>
        <Button onClick={() => this.slideNext()}>next</Button>
        <Button onClick={() => this.slidePrev()}>prev</Button>
        <Button onClick={() => this.stop()}>stop</Button>
        <Button onClick={() => this.play()}>play</Button>
        <div
          className={wrapperCls}
          onTouchMove={moveHandler}
          onTouchStart={startHandler}
          onTouchEnd={endHandler}
          ref={wrapperRef}
        >
          <div
            style={containerStl}
            className={`${prefix}-container`}
            ref={containerRef}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Swipe;
