<div class="block-panel">

<h3>介绍</h3>

`Marquee` 常用于多个消息的滚动展示。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/marquee/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Marquee, } from "f6";

export default function () {
  return (
    <>
      <Marquee>
        <Marquee.Item>寻寻觅觅，冷冷清清，凄凄惨惨戚戚</Marquee.Item>
        <Marquee.Item>乍暖还寒时候，最难将息</Marquee.Item>
        <Marquee.Item>三杯两盏淡酒，怎敌他、晚来风急</Marquee.Item>
      </Marquee>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/marquee/demo/height.md>更新此演示代码</a>
        <h3>设置高度</h3>

```jsx
import { Marquee } from "f6";

export default function () {
  return (
    <>
      <Marquee itemHeight={40}>
        <Marquee.Item>寻寻觅觅，冷冷清清，凄凄惨惨戚戚</Marquee.Item>
        <Marquee.Item>乍暖还寒时候，最难将息</Marquee.Item>
        <Marquee.Item>三杯两盏淡酒，怎敌他、晚来风急</Marquee.Item>
      </Marquee>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| interval | 轮播间隔时间 | `number` | `2000` |
| duration | 一次滚动消耗的时间 | `number` | `250` |
| itemHeight | 滚动项的高度 | `number` | `30` |

```tsx
export interface MarqueeProps {
  interval?: number;
  duration?: number;
  itemHeight?: number;
}
```
</div>