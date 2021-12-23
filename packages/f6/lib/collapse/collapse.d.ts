import { FC } from "react";
export interface CollapseProps {
    className?: string;
    defaultOpenKeys: string[];
    multiple?: boolean;
}
declare const Collapse: FC<CollapseProps>;
export default Collapse;
