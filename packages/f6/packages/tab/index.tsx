import React, { useState } from "react";
import { defineName } from "../utils/name";
import "./index.less";

const [prefix] = defineName("tab");

export interface TabProps {
  defaultValue?: number;
}

const Tab: React.FC<TabProps> & {
  TabItem: React.FC<TabItemProps>;
} = ({
  children,
  defaultValue = 0
}) => {
  const [current, setCurrent] = useState(defaultValue);
  let list = children as React.FC<TabItemProps>[];

  const renderContent = () => {
    
  }

  const renderTabs = () => {
    return list.map((it, index) => {
      return (
        <div className="wax-tab-item" onClick={() => {
          setCurrent(index)
        }}>
          <span>{((it as any).props).title}</span>
        </div>
      )
    })
  }

  return (
    <div className={prefix}>
      <div className="wax-tab__wrap">
        <div className="wax-tab__list">
          {renderTabs()}
        </div>
        <div className="wax-tab__line" style={{
          left: `${(current / list.length * 100)}%`
        }}></div>
      </div>
    </div>
  );
};

export interface TabItemProps {
  title: string;
}

const itemPrefix = `${prefix}-item`;

const TabItem: React.FC<TabItemProps> = ({ title = "" }) => {
  return <div className={itemPrefix}>{title}</div>;
};

Tab.TabItem = TabItem;

export default Tab;