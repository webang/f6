import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./index.less";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { defineName } from "../utils/name";
import { usePropsValue } from "../utils/useValue";
import Trigger from "./trigger";

export type PlacementType =
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export interface PopoverProps {
  children: React.ReactElement;
  content?: React.ReactNode;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
  trigger?: "click";
  visible?: boolean;
  defaultVisible?: boolean;
  contentStyle: React.CSSProperties;
  onVisibleChange?: (visible: boolean) => void;
}

export interface PopoverRef {
  resetPosition: () => void;
}

const [prefix] = defineName("popover");

const defaultProps = {
  trigger: "click",
  placement: "bottom" as PlacementType,
  defaultVisible: false,
};

const Popover: React.ForwardRefRenderFunction<PopoverRef, PopoverProps> = (
  p,
  ref
) => {
  const props = { ...defaultProps, ...p };
  const {
    content,
    children,
    placement,
    verticalDistance = 8,
    horizontalDistance = 8,
  } = props;
  const [visible, setVisible] = usePropsValue({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange,
  });
  const [rect, setRect] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<React.ReactInstance>(null);

  useEffect(() => {
    const isParent = (node: Element, target: Element) => {
      if (node === target) {
        return true;
      }
      while ((node = node?.parentNode as Element)) {
        if (node === target) {
          return true;
        }
      }
      return false;
    };
    function onClick(event: any) {
      const triggerInstance = triggerRef.current!;
      const element = ReactDOM.findDOMNode(triggerInstance) as Element;
      if (element) {
        if (!isParent(event.target, element)) {
          setVisible(false);
        }
      }
    }
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  const initRect = () => {
    if (!triggerRef.current) return;
    const triggerInstance = triggerRef.current;
    const element = ReactDOM.findDOMNode(triggerInstance) as Element;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    setRect({
      width: rect.width,
      height: rect.height,
      y: rect.y + document.documentElement.scrollTop || 0,
      x: rect.x + document.documentElement.scrollLeft || 0,
    });
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setContentSize({
        width: rect.width,
        height: rect.height,
      });
    }
  };

  useImperativeHandle(ref, () => ({
    resetPosition: initRect,
  }));

  useEffect(initRect, [visible]);

  const getContainer = () => {
    return document.body;
  };

  const getX = (placement: PlacementType) => {
    switch (placement) {
      case "bottom":
      case "top":
        return `${rect.x + (rect.width - contentSize.width) / 2}px`;

      case "bottom-start":
      case "top-start":
        return `${rect.x}px`;

      case "bottom-end":
      case "top-end":
        return `${rect.x - contentSize.width + rect.width}px`;

      case "right":
      case "right-end":
      case "right-start":
        return `${rect.x + rect.width + horizontalDistance}px`;

      case "left":
      case "left-end":
      case "left-start":
        return `${rect.x - contentSize.width - horizontalDistance}px`;
    }
  };

  const getY = (placement: PlacementType) => {
    switch (placement) {
      case "bottom":
      case "bottom-end":
      case "bottom-start":
        return `${rect.y + rect.height + verticalDistance}px`;

      case "top":
      case "top-end":
      case "top-start":
        return `${rect.y - contentSize.height - verticalDistance}px`;

      case "left":
      case "right":
        return `${rect.y - (contentSize.height - rect.height) / 2}px`;

      case "left-start":
      case "right-start":
        return `${rect.y}px`;

      case "left-end":
      case "right-end":
        return `${rect.y - contentSize.height + rect.height}px`;
    }
  };

  const style = { left: getX(placement), top: getY(placement) };

  const portal = ReactDOM.createPortal(
    <div className={classNames([prefix])} ref={contentRef} style={style}>
      <div
        style={p.contentStyle}
        className={classNames([
          prefix + "__content",
          prefix + "--" + placement,
        ])}
      >
        <div className="wax-popover__arrow"></div>
        <div className="wax-popover__body">{content}</div>
      </div>
    </div>,
    getContainer()
  );

  const clonedReference = React.cloneElement(children, {
    onClick: () => {
      setVisible(!visible);
    },
  });

  return (
    <>
      <Trigger ref={triggerRef as any}>{clonedReference}</Trigger>
      {visible && portal}
    </>
  );
};

export default forwardRef(Popover);