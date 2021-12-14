<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Marquee, Toast, Button } from "f6";

const button = (
  <Button size="mini" color="primary">
    详情
  </Button>
);

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
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

### Props

thi is Props content

### API

this is API content