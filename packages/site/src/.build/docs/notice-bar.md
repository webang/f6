<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/notice-bar/demo/basic.md>更新此演示代码</a>
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