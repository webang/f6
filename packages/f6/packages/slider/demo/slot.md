---
order: 1
title: 使用插槽
---

```jsx
import { Slider, Toast } from 'f6';

export default function App() {
  return (
    <>
      <Slider left={<span>0</span>} right={<span>100</span>} onChange={(v) => {
        Toast.show({ message: v })
      }}></Slider>
    </>
  )
}
```