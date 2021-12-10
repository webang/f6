import { createContext } from 'react'

export interface CollapseContext {
  openKeys: string[];
  check: (val: string) => void;
  uncheck: (val: string) => void;
}

export const CollapseContext = createContext<CollapseContext | null>(null);