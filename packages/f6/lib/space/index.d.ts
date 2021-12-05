import { FC } from "react";
import './index.less';
export interface SpaceProps {
    direction?: 'vertical' | 'horizontal';
    align?: 'start' | 'end' | 'center' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    wrap?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const Space: FC<SpaceProps>;
export default Space;
