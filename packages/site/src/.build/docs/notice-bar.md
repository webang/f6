<div class="block-panel">
<h3>基本用法</h3>

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
</div>
<div class="block-panel">

<h3>Props</h3>

thi is Props content


</div>
<div class="block-panel">

<h3>API</h3>

this is API content
</div>