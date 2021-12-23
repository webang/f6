import React from "react";
import "./index.less";
export interface PullRefreshProps {
    topPullDistance?: number;
    loadingText?: number;
    pullText?: string;
    looseText?: string;
    topMaxPullDistance?: number;
    onLoad?: () => void;
}
export interface PullRefreshRef {
    finish: () => void;
    refresh: () => void;
}
declare const PullRefresh: React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<PullRefreshRef>>;
export default PullRefresh;
