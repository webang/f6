<div class="block-panel">

<h3>介绍</h3>

`Slider` 用于滑动输入，常用于从某个范围中选择一个值。

> 该组件在 PC 上不可用，快速拖动时，会导致 mouseMove 失去焦点，而不再触发回调。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/slider/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Slider, Toast } from 'f6';

export default function App() {
  return (
    <>
      <Slider></Slider>
      <div style={{ height: 10 }}></div>
    </>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| defaultValue | 当前数值 | number | `0` |
| min | 最小可选 | number | `0` |
| max | 最大可选 | number | `100` |
| runwayHeight | 轨道高度  | number | `2` |
| runwayColor | 轨道默认背景颜色 | string | - |
| trackColor | 轨道高亮背景颜色 | string | - |
| thumbColor | 手柄背景颜色 | string | - |
| step | 滑动倍数 | number | `1` |
| disabled | 禁用状态 | boolean | `false` |
</div>