import { FC, ReactNode } from "react";

export interface DropdownMenuItemProps {
  title: string;
  className?: string;
  actions?: {
    name: ReactNode,
    value: string;
  }[]
}

const DropdownMenuItem: FC<DropdownMenuItemProps> = () => null;

export default DropdownMenuItem;