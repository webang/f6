import React from "react";
import { defineName } from "../utils/name";
import { getPosition, isMobile } from "../utils/dom";
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
    translate: 0,
  };

  private store = {
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
    realIndex: 0,
    maxTranslate: 0,
    maxGridIndex: 0,
    minGridIndex: 0,
    minTranslate: 0,
    initialized: false,
    slides: [] as HTMLDivElement[],
    slidesGrid: [] as number[],
    isLoop: !!this.props.loop,
    isScrolling: undefined as (Boolean|undefined),
    useAnimate: false,
    timeId: null as unknown as NodeJS.Timeout,
    isHorizontal: this.props.direction === "horizontal",
    rectProp: (this.props.direction === "horizontal" ? "width" : "height") as
      | "width"
      | "height",
  };

  private wrapperRef = React.createRef<HTMLDivElement>();
  private containerRef = React.createRef<HTMLDivElement>();

  // move handler
  private moveHandler = (event: React.TouchEvent) => {
    const touch = getPosition(event.type, event);
    const store = this.store;

    if (!store.isTouched) return;

    store.useAnimate = false;
    store.diffX = touch.clientX - store.startX;
    store.diffY = touch.clientY - store.startY;
    store.diff = store.isHorizontal ? store.diffX : store.diffY;

    // determine isScrolling
    if (typeof store.isScrolling === 'undefined') {
      if (store.isHorizontal) {
        store.isScrolling = Math.abs(store.diffX) < Math.abs(store.diffY);
      } else {
        store.isScrolling = Math.abs(store.diffX) > Math.abs(store.diffY);
      }
    }

    if (store.isScrolling) return;
    event.preventDefault();

    const resetTouch = () => {
      store.startX = touch.clientX;
      store.startY = touch.clientY;
      store.diff = 0;
    };
    let translate = store.startTranslate + store.diff;

    if (store.isLoop) {
      if (Math.abs(translate) >= store.maxTranslate) {
        this.slideTo(1, false);
        resetTouch();
        store.startTranslate = translate = store.diff + this.getPosByGridIndex(1);
      } else if (translate >= 0) {
        this.slideTo(store.slidesGrid.length - 2, false);
        resetTouch();
        translate = store.diff + this.getPosByGridIndex(store.slidesGrid.length - 2);
        store.startTranslate = translate;
      }
    } else {
      if (Math.abs(translate) >= store.maxTranslate || translate >= 0) {
        translate = (store.diff/Math.abs(store.diff)) * Math.pow(Math.abs(store.diff), 0.8) + this.store.startTranslate;
      }
    }

    this.setState({ translate });
  };

  // 通过 gridIndex 获取偏移距离
  getPosByGridIndex = (index: number) => {
    return -this.store.slidesGrid[index];
  }

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
    if (store.isScrolling || store.diff === 0) {
      return;
    }

    store.isTouched = false;

    const rtl = store.diff < 0;
    const deltaTime = Date.now() - store.startTime;
    const isShortTouch = deltaTime < SHORT_TOUCH;
    let gridIndex = store.gridIndex;
    let isValidTouch = isShortTouch || Math.abs(store.diff) > store.size / 2;

    if (rtl && isValidTouch) {
      gridIndex++;
    } else if (!rtl && isValidTouch) {
      gridIndex--;
    }

    this.slideTo(gridIndex, true);

    // if (store.diff !== 0) {
    //   if (store.diff < 0) {
    //     if (deltaTime < SHORT_TOUCH) {
    //       this.slideNext();
    //     } else {
    //       if (store.diff < -100) {
    //         this.slideNext();
    //       } else {
    //         slideTo(store.gridIndex);
    //       }
    //     }
    //   } else if (store.diff > 0) {
    //     if (deltaTime < SHORT_TOUCH) {
    //       this.slidePrev();
    //     } else {
    //       if (store.diff > 100) {
    //         this.slidePrev();
    //       } else {
    //         slideTo(store.gridIndex);
    //       }
    //     }
    //   }
    // }

    // store.diff = 0;
  };

  private onMount = () => {
    const { store, wrapperRef } = this;
    if (!wrapperRef.current) return;

    const wrapperEl = wrapperRef.current;
    const { width, height } = wrapperEl.getBoundingClientRect();

    store.size = store.isHorizontal ? width : height;
    if (store.isHorizontal) {
      wrapperEl.style.width = width + "px";
    } else {
      wrapperEl.style.height = height + "px";
    }

    store.isLoop && this.createLoop();
    this.initSlides();
    this.forceUpdate();
    store.initialized = true;
  };

  private initSlides = () => {
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
        if (store.isHorizontal) {
          element.style.marginRight = spaceBetween + "px";
        } else {
          element.style.marginBottom = spaceBetween + "px";
        }
      }
      store.slidesGrid[index] =
        index * store.size + index * (spaceBetween || 0);
    });

    store.minGridIndex = 0;
    store.maxGridIndex = store.slides.length - 1;
    store.minTranslate = store.slidesGrid[store.minGridIndex];
    store.maxTranslate = store.slidesGrid[store.maxGridIndex];
  };

  public slideTo = (index: number, animate = true, useCallback = true) => {
    const { store } = this;
    store.useAnimate = animate;

    if (store.isLoop && index > store.maxGridIndex) {
      store.useAnimate = false;
      store.gridIndex = 1;
      this.setTranslate(this.getPosByGridIndex(1));
      index = 2;
    }

    if (store.isLoop && index < store.minGridIndex) {
      store.useAnimate = false;
      store.gridIndex = store.maxGridIndex - 1;
      let translate = this.getPosByGridIndex(store.maxGridIndex - 1)
      this.setTranslate(translate);
      index = store.maxGridIndex - 2;
    }

    if (!store.isLoop) {
      if (index < 0) {
        index = 0;
      }
      if (index > store.maxGridIndex) {
        index = store.maxGridIndex;
      }
    }

    setTimeout(() => {
      store.gridIndex = index;
      store.useAnimate = true;
      this.setTranslate(this.getPosByGridIndex(index));
      let realIndex = index;
      if (store.isLoop) {
        if (index === 0) {
          realIndex = this.store.slidesGrid.length - 3;
        } else if (index >= this.store.slidesGrid.length - 1) {
          realIndex = 0;
        } else {
          realIndex = index - 1;
        }
      }

      if (this.store.realIndex !== realIndex) {
        useCallback && this.props.onIndexChange?.(realIndex);
        this.store.realIndex = realIndex;
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
    })
  };

  /**
   * @description slide to next
   */
   public slideNext = () => {
    this.slideTo(this.store.gridIndex + 1);
  };

  /**
   * @description slide to previous
   */
   public slidePrev = () => {
    this.slideTo(this.store.gridIndex - 1);
  };

  /**
   * @description set current translate
   * @param translate
   */
  private setTranslate = (translate: number) => {
    this.setState({ translate });
  };

  /**
   * @description stop autoplay
   * @returns
   */
  public stop = () => clearInterval(this.store.timeId);

  /**
   * @description enable autoplay
   */
  public play = () => {
    this.stop();
    this.store.timeId = setInterval(() => this.slideNext(), 1000);
  };

  /**
   * @description create el when loop mode
   */
  private createLoop() {
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

    [].forEach.call(innerEl.children, (element: Element, index: number) => {
      (element as HTMLDivElement).setAttribute("data-index", `${index}`);
    });
    innerEl.insertBefore(lastEl, innerEl.firstElementChild);
    innerEl.appendChild(firstEl);
  }

  private initEvents = () => {
    const { moveHandler, startHandler, endHandler } = this;
    if (this.wrapperRef.current) {
      const el = this.wrapperRef.current;
      const options = {
        passive: false,
      };
      if (isMobile()) {
        el.addEventListener("touchstart", startHandler as any, options);
        window.addEventListener("touchmove", moveHandler as any, options);
        el.addEventListener("touchend", endHandler as any, options);
      } else {
        el.addEventListener("mousedown", startHandler as any, options);
        window.addEventListener("mousemove", moveHandler as any, options);
        el.addEventListener("mouseup", endHandler as any, options);
      }
    }
  };

  componentDidMount() {
    this.onMount()
    this.initEvents();
    if (this.props.loop) {
      this.slideTo(this.props.activeIndex || 0 + 1, false, false);
    } else {
      this.slideTo(0, false);
    }
  }

  render() {
    const { children } = this.props;
    const { props, state, store, wrapperRef, containerRef } = this;

    const containerStl: React.CSSProperties = {
      transitionDuration: `${store.useAnimate ? props.duration : 0}ms`,
      [store.rectProp]: `${store.maxTranslate + store.size}px`,
      transform: store.isHorizontal
        ? `translate3d(${state.translate}px, 0, 0)`
        : `translate3d(0, ${state.translate}px, 0)`,
    };

    const wrapperCls = classNames({
      [prefix]: true,
      ["effect-" + this.props.effect]: true,
      [`is-${this.props.direction}`]: true,
    });

    return (
      <div style={this.props.style} className={wrapperCls} ref={wrapperRef}>
        <div
          style={containerStl}
          className={`${prefix}-container`}
          ref={containerRef}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Swipe;