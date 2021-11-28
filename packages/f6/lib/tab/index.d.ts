import React from "react";
import "./index.less";
export interface TabProps {
    defaultValue?: number;
}
declare const Tab: React.FC<TabProps> & {
    TabItem: React.FC<TabItemProps>;
};
export interface TabItemProps {
    title: string;
}
export default Tab;
