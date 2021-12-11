import { FC, useRef, useEffect, useState, CSSProperties } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";
import React from "react";
import { DropdownMenuItemProps } from "packages";
import Icon from "f6-icons";
import CheckList from "../check-list";

const [prefix] = defineName("dropdown-menu");

export interface DropdownMenuProps {
  className?: string;
  onClose?: Function;
  onClickMenu?: (o: {index: number; value: string}) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ onClickMenu, className, onClose, children }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    top: 0,
    current: undefined as undefined | number,
  });
  const mChildren = React.Children.toArray(children);

  const updatePosition = () => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      setState((prev) => ({
        ...prev,
        top: rect.top + rect.height
      }));
    }
  }

  useEffect(() => {
    updatePosition()
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [updatePosition])

  const mCls = classNames([className, prefix]);
  const maskStl: CSSProperties = {
    top: state.top,
  };

  const handleClick = (i: number) => {
    if (i === state.current) {
      setState((prev) => ({ ...prev, current: undefined }));
      onClose?.();
    } else {
      setState((prev) => ({ ...prev, current: i }));
    }
  };

  const menus = mChildren.map((it, index) => {
    const element = it as React.FunctionComponentElement<DropdownMenuItemProps>;
    const style: CSSProperties = {
      transform: `rotate(${state.current == index ? 180 : 0}deg)`
    }
    return (
      <div className={`${prefix}-item`} onClick={() => handleClick(index)}>
        <div className={`${prefix}-item-name`}>{element.props.title}</div>
        <Icon style={style} className={`${prefix}__icon`} name="arrow-down" />
      </div>
    );
  });

  const renderAction = () => {
    return mChildren.map((it, index) => {
      if (index !== state.current) return null;
      const element =
        it as React.FunctionComponentElement<DropdownMenuItemProps>;
      return (element.props.actions || []).map((action) => {
        return (
          <CheckList.Item onClick={() => {
            onClickMenu?.({
              index: index,
              value:  action.value
            })
          }} value={action.value}>{action.name}</CheckList.Item>
        );
      });
    });
  };

  const renderMask = () => {
    if (state.current === undefined) return null;
    return (
      <div className={`${prefix}__mask`} style={maskStl}>
        <div className={`${prefix}__content`}>
          <CheckList>{renderAction()}</CheckList>
        </div>
      </div>
    );
  };

  return (
    <div className={mCls}>
      <div ref={barRef} className={`${prefix}-items`}>
        {menus}
      </div>
      {renderMask()}
    </div>
  );
};

export default DropdownMenu;
