import { createContext } from 'react'

export interface CheckListContext {
  value: string[];
  check: (val: string) => void;
  uncheck: (val: string) => void;
}

export const CheckListContext = createContext<CheckListContext | null>(null);