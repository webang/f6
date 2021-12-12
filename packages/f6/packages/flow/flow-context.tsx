import { createContext, ReactNode } from 'react'

export interface FlowContext {
  current: number;
  direction: 'horizontal' | 'vertical';
  finishIcon: ReactNode;
  processIcon: ReactNode;
  waitingIcon: ReactNode;
}

export const FlowContext = createContext<FlowContext | null>(null);