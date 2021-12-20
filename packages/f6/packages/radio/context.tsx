import { createContext } from 'react'
import { RadioValue } from './radio';

export interface IGroupContext {
  value?: RadioValue|null;
  disabled?: boolean;
  setValue: (val: RadioValue|null) => void;
}

export const RadioGroupContext = createContext<IGroupContext | null>(null);