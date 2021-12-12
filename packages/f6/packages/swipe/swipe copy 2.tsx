import { defineName } from "../utils/name";
import { FC, Children, useRef, useEffect, CSSProperties, useState } from "react";

export interface SwipeProps {
  direction?: "horizontal" | "vertical";
  loop?: boolean;
  duration?: number;
  activeIndex?: number;
  autoplay?: number;
  delay?: number;
  effect?: "slide" | "scale";
  spaceBetween?: number;
  width?: number;
  height?: number;
}

const RATIO = 0.3;
const SHORT_TOUCH = 250;
const VERTICAL = "vertical";
const HORIZONTAL = "horizontal";
const [prefix] = defineName("swipe");

// class Swipe extends React.Component {
//   render() {
//     const { children } = this.props;
//     const _children = Children.toArray(children);
//     return (
//       <div>
//         {_children[_children.length - 1]}
//         {children}
//         {_children[0]}
//       </div>
//     );
//   }
// }

const Swipe: FC<SwipeProps> = (props) => {
  const {
    children,
    spaceBetween = 0,
    loop = true,
    duration = 300,
    direction = "horizontal",
  } = props;
  const _children = Children.toArray(children);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    translate: 0,
    useAnimation: true,
    maxTranslate: 0,
    maxGridIndex: 0,
    minGridIndex: 0,
    minTranslate: 0,
  })

  const mRef = useRef({
    size: 0,
    curWidth: 0,
    curHeight: 0,
    slides: [],
    isScrolling: undefined,
    length: undefined,
    touches: {
      startX: undefined as number | undefined,
      startY: undefined,
      endX: undefined,
      endY: undefined,
      diff: undefined,
      diffX: undefined,
      currentX: undefined,
      currentY: undefined,
      startTranslate: undefined,
      time: undefined,
      isMoved: undefined,
      isTouched: undefined,
    },
    gridIndex: 0,
    slidesGrid: [],
    transitionDuration: 0,
    rectProp: (direction === 'horizontal' ? "width" : "height"),
    interval: null,
    realLength: _children.length || 0,
    virtualLen: _children.length + 2,
    initialized: false,
    children: [],
    isHorizontal: direction === HORIZONTAL,
    isLoop: !!loop,
  });

  const onMount = () => {
    if (!wrapperRef.current) return;
    if (!containerRef.current) return;

    const wrapperEl = wrapperRef.current;
    const containerEl = containerRef.current;
    const { width, height } = wrapperEl.getBoundingClientRect();

    const that = mRef.current;

    that.curWidth = width;
    that.curHeight = height;
    that.size = that.isHorizontal ? +that.curWidth : +that.curHeight;

    if (that.curWidth) {
      wrapperEl.style.width = that.curWidth + "px";
    }
    if (that.curHeight) {
      wrapperEl.style.height = that.curHeight + "px";
    }

    that.initialized = true;

    setState(prev => {
      return {
        ...prev,
        maxTranslate: that.virtualLen * that.size
      }
    })
  };

  useEffect(() => {
    onMount();
  }, []);


  const that = mRef.current;

  const containerStyle: CSSProperties = {
    transitionDuration: `${state.useAnimation ? duration : 0}ms`,
    [that.rectProp]: `${state.maxTranslate}px`,
    transform: that.isHorizontal
      ? `translate3d(${state.translate}px, 0, 0)`
      : `translate3d(0, ${state.translate}px, 0)`
  };

  const renderChildren = () => {
    return (
      <div ref={containerRef} style={containerStyle} className={`${prefix}-container`}>
        {loop
          ? [_children[_children.length - 1], ..._children, _children[0]]
          : _children}
      </div>
    );
  };

  return (
    <div className={prefix} ref={wrapperRef}>
      {renderChildren()}
    </div>
  );
};

export default Swipe;
