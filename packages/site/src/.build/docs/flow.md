<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/flow/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useState } from 'react';
import { Cell, Flow, Input, Toast, Button } from "f6";

export default function () {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(p => p + 1 > 3 ? 0 : p + 1)
  return (
    <>
      <Flow current={current}>
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
      <Button color="primary" block onClick={next}>next</Button>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/flow/demo/direction.md>更新此演示代码</a>
        <h3>排列方向</h3>

```jsx
import { Cell, Flow, Input, Toast, Button } from "f6";

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
      <Flow current={1} direction="vertical">
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>FieldProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 输入框类型 | boolean | `text` |
| defaultValue | 默认值 | string | `''` |
| clearable | 展示清除按钮 | boolean | `true` |
| label | 标题 | string | `''` |
| immediateCheck | 首次挂载是否检验 ｜ boolean | `false` |
| rules | 匹配规则 | Rule[] | `[]` |
</div>