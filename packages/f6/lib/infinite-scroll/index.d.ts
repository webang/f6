import React, { ReactNode } from 'react';
import './index.less';
export interface InfiniteScrollProps {
    hasMore?: boolean;
    footer?: (params: {
        loading: boolean;
        hasMore: boolean;
    }) => ReactNode;
    onLoad?: () => void;
    children?: ReactNode;
}
export interface InfiniteScrollMethods {
    finish: () => void;
}
declare const InfiniteScroll: React.ForwardRefExoticComponent<InfiniteScrollProps & React.RefAttributes<InfiniteScrollMethods>>;
export default InfiniteScroll;
