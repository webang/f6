import { createContext } from "react";

export interface MarqueeContext {
  itemHeight: number;
}

export const MarqueeContext = createContext<MarqueeContext|null>(null);