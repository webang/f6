import React from "react";
import "./index.less";
export interface PullRefreshProps {
    onLoad?: Function;
    topPullDistance?: number;
    loadingText?: number;
    pullText?: string;
    looseText?: string;
    topMaxPullDistance?: number;
}
export interface PullRefreshRef {
    finish: Function;
}
declare const PullRefresh: React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<PullRefreshRef>>;
export default PullRefresh;
