import React, { CSSProperties, useState } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";
import Badge from "../badge";
import { usePropsValue } from "../utils/useValue";
import "./index.less";

export interface TabBarProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
}

export type TabBarItemProps = {
  icon?: React.ReactNode | ((active: boolean) => React.ReactNode);
  title?: React.ReactNode;
  key?: string;
  badge?: string | number | symbol;
  className?: string;
  style?: CSSProperties;
};

const [prefix] = defineName("tab-bar");

export const TabBarItem: React.FC<TabBarItemProps> = () => null;

const TabBar: React.FC<TabBarProps> & {
  Item: React.FC<TabBarItemProps>;
} = (props) => {
  const [activeKey, setActiveKey] = usePropsValue({
    defaultValue: props.defaultActiveKey,
    value: props.activeKey,
    onChange: props.onChange,
  });

  let list = props.children as React.FC<TabBarItemProps>[];

  function renderContent(item: any) {
    const { props } = item;
    const active = item.key === activeKey;

    const iconElement = props.icon && (
      <div className={`${prefix}-item-icon`}>
        {typeof props.icon === "function" ? props.icon(active) : props.icon}
      </div>
    );

    const titleElement = props.title && (
      <div className={`${prefix}-item-title`}>{props.title}</div>
    );

    return (
      <>
        <div className={`${prefix}-item-icon-box`}>
          {props.badge !== undefined ? (
            <Badge content={props.badge} className={`${prefix}-icon-badge`}>
              {iconElement}
            </Badge>
          ) : (
            iconElement
          )}
        </div>
        {titleElement}
      </>
    );
  }

  const renderItem = (item: any) => {
    const active = item.key === activeKey;
    return (
      <div
        style={item.props.style}
        key={item.key}
        onClick={() => {
          const { key } = item;
          if (key === undefined || key === null) {
            return;
          }
          setActiveKey(key.toString());
        }}
        className={classNames(`${prefix}-item`, item.props.className, {
          [`${prefix}-item-active`]: active,
        })}
      >
        {renderContent(item)}
      </div>
    );
  };

  return (
    <div className={classNames(prefix, props.className)} style={props.style}>
      {list.map(renderItem)}
    </div>
  );
};

TabBar.Item = TabBarItem;

export default TabBar;
