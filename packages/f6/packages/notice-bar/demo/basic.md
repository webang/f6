---
order: 0
title: 基本用法
---

```jsx
import React from 'react';
import { Button, Overlay, NoticeBar } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <NoticeBar text={"纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。"}></NoticeBar>
  )
}
```