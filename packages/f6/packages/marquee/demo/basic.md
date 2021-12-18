---
order: 0
title: 基本用法
---

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