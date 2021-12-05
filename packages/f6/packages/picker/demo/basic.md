---
order: 0
title: 基本用法
---

```jsx
import { Picker, Toast } from 'f6';

const columns = new Array(10).fill(1).map((_, index) => {
  return { label: '广东' + index, value: 'A' }
})

export default function App() {
  return (
    <Picker
      cascade={false}
      defaultIndex={[0]}
      columns={[columns]}
      onChange={(index, value, column, picker) => {
        console.log(picker.getValues())
      }}
    />
  )
}
```