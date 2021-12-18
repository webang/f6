<div class="block-panel">

<h3>介绍</h3>

`NoticeBar` 常用于滚动的展示一段长文本。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/notice-bar/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from "react";
import { NoticeBar } from "f6";

export default function App() {
  return (
    <NoticeBar
      text={
        "纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。"
      }
    />
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| text | 内容 | ReactNode | - |
| step | 每帧进度大小 | `number` | `2` |
| start | 初始偏移距离 | `number` | `100` |

```tsx
export interface NoticeBarProps {
  text?: ReactNode;
  step?: number;
  start?: number;
}
```
</div>