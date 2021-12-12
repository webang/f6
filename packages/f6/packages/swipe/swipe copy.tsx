import { defineName } from "../utils/name";
import { FC, Children, useRef, useEffect } from "react";

export interface SwipeProps {
  direction?: 'horizontal' | 'vertical';
  loop?: boolean;
  speed?: number;
  activeIndex?: number;
  autoplay?: number;
  delay?: number;
  effect?: 'slide' | 'scale',
  spaceBetween?: number;
  width: number;
  height: number;
}

const RATIO = 0.3;
const SHORT_TOUCH = 250;
const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';
const [prefix] = defineName('swipe')

const Swipe: FC<SwipeProps> = ({
  children,
  spaceBetween = 0
}) => {
  const _children = Children.toArray(children);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMount = () => {
    if (!wrapperRef.current) return;
    if (!containerRef.current) return;

    const wrapperEl = wrapperRef.current;
    const containerEl = containerRef.current;
    const { width, height } = wrapperEl.getBoundingClientRect();
  }

  useEffect(() => {
    onMount()
  }, [])

  return (
    <div className={prefix}>
      {_children[_children.length - 1]}
      {children}
      {_children[0]}
    </div>
  );
};

export default Swipe;