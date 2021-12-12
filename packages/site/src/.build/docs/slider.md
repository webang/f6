<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Slider, Toast } from 'f6';

export default function App() {
  return (
    <>
      <div style={{ height: 10 }}></div>
      <Slider></Slider>
      <div style={{ height: 10 }}></div>
      <Slider></Slider>
    </>
  )
}
```
</div>

<div class="block-panel"><h3>使用插槽</h3>

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
</div>

## Props

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