import { createContext } from 'react'
import { CheckboxValue } from './checkbox';

export interface CheckboxGroupContext {
  value: CheckboxValue[];
  check: (val: CheckboxValue) => void;
  uncheck: (val: CheckboxValue) => void;
  setValue?: (val: CheckboxValue) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContext | null>(null);