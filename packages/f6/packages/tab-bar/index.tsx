import React, { ReactNode, useState } from "react";
import { defineName } from "../utils/name";
import classNames from 'classnames'
import Badge, { BadgeProps } from '../badge'
import "./index.less";

const [prefix] = defineName("tab-bar");

export interface TabBarProps {
  activeKey?: string | null
  badge?: BadgeProps['content']
  onChange?: (key: string) => void
}

const TabBar: React.FC<TabBarProps> & {
  TabBarItem: React.FC<TabBarItemProps>;
} = ({
  children,
  activeKey,
  onChange
}) => {
  const [activeKeySet, setActiveKey] = useState(activeKey);
  const onChangeHandle = (key:string)=>{
    setActiveKey(key)
    onChange?.(key)
  }
  let list = children as React.FC<TabBarItemProps>[];
  let firstActiveKey: string | null = (list[0]as any).key

  let defaultValue = activeKeySet ?? firstActiveKey

  // console.log('children',children);

  return (
    <div className={prefix}>
      {list.map((item:any) => {
      const active = item.key === defaultValue
      function renderContent() {
        const iconElement = item.props.icon && (
          <div className={`${prefix}-item-icon`}>
            {typeof item.props.icon === 'function'
              ? item.props.icon(active)
              : item.props.icon}
          </div>
        )
        const titleElement = item.props.title && (
          <div className={`${prefix}-item-title`}>{item.props.title}</div>
        )
        if (iconElement) {
          return (
            <>
              <Badge
                content={item.props.badge}
                className={`${prefix}-icon-badge`}
              >
                {iconElement}
              </Badge>
              {titleElement}
            </>
          )
        } else if (titleElement) {
          return (
            <>
              <Badge
                content={item.props.badge}
                className={`${prefix}-title-badge`}
              >
                {titleElement}
              </Badge>
            </>
          )
        }
        return null
      }
      return (
        <div
          key={item.key}
          onClick={() => {
            const { key } = item
            if (key === undefined || key === null) return
            onChangeHandle(key.toString())
          }}
          className={classNames(`${prefix}-item`, {
            [`${prefix}-item-active`]: active,
          })}
        >
          {renderContent()}
        </div>
      )
    })}
    </div>
  );
};

export type TabBarItemProps = {
  icon?: ReactNode | ((active: boolean) => ReactNode)
  title?: string;
  key?: string;
  badge?: string|number;
}
export const TabBarItem: React.FC<TabBarItemProps> = () => {
  return null
}

TabBar.TabBarItem = TabBarItem;

export default TabBar;
