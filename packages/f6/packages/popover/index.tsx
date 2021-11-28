import React, { useRef, useState, useEffect } from "react";
import "./index.less";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { defineName } from "../utils/name";

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
  reference: React.ReactElement;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
  onClickTrigger?: () => void;
}

const [prefix] = defineName("popover");

const Popover: React.FC<PopoverProps> = ({
  reference,
  children,
  placement = "bottom",
  verticalDistance = 8,
  horizontalDistance = 8,
  onClickTrigger,
}) => {
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findParent = (node: Element, target: Element) => {
      if (node === target) {
        return true;
      }
      while (node = node?.parentNode as Element) {
        if (node === target) {
          return true;
        }
      }
      return false;
    }
    function onClick(event: any) {
      if (!findParent(event.target, triggerRef.current as Element)) {
        setVisible(() => false);
      }
    }
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    }
  }, [])

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
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
    }
  }, [visible]);

  const getContainer = () => {
    return document.body;
  }

  const getX = (placement: PlacementType) => {
    switch(placement) {
      case "bottom":
      case 'top':
        return `${rect.x + (rect.width - contentSize.width) / 2}px`;

      case 'bottom-start':
      case 'top-start':
        return `${rect.x}px`;

      case 'bottom-end':
      case 'top-end':
        return `${rect.x - contentSize.width + rect.width}px`;

      case 'right':
      case 'right-end':
      case 'right-start':
        return `${rect.x + rect.width + horizontalDistance}px`;

      case 'left':
      case 'left-end':
      case 'left-start':
        return `${rect.x - contentSize.width - horizontalDistance}px`;
    }
  }

  const getY = (placement: PlacementType) => {
    switch(placement) {
      case 'bottom':
      case 'bottom-end':
      case 'bottom-start':
        return `${rect.y + rect.height + verticalDistance}px`;
      
      case 'top':
      case 'top-end':
      case 'top-start':
        return `${rect.y - contentSize.height - verticalDistance}px`;
      
      case 'left':
      case 'right':
        return `${rect.y - (contentSize.height - rect.height) / 2}px`;

      case 'left-start':
      case 'right-start':
        return `${rect.y}px`;

      case 'left-end':
      case 'right-end': 
        return `${rect.y - contentSize.height + rect.height}px`;
    }
  }
  
  const style = { left: getX(placement), top: getY(placement) };

  const portal = ReactDOM.createPortal(
    <div ref={contentRef} className={classNames([
      prefix + "__content",
      prefix + "--" + placement
    ])} style={style}>
      <div className="wax-popover__arrow"></div>
      <div className="wax-popover__body">
        {children}
      </div>
    </div>,
    getContainer()
  );

  return (
    <>
      <span
        ref={triggerRef}
        onClick={() => {
          setVisible((prev) => !prev);
        }}
        className={prefix + "__trigger"}
      >
        {reference}
      </span>
      {visible && portal}
    </>
  );
};

export default Popover;