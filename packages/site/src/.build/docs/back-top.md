<div class="block-panel">
      <script>var code =`import { Affix, BackTop } from 'f6';

export default function App() {
  return (
    <div>
      <div style={{ height: 400 }} />
      <BackTop bottom={20}></BackTop>
      <div style={{ height: 400 }} />
    </div>
  )
}
`; console.log(code)</script>
      <h3>基本用法</h3>

```jsx
import { Affix, BackTop } from 'f6';

export default function App() {
  return (
    <div>
      <div style={{ height: 400 }} />
      <BackTop bottom={20}></BackTop>
      <div style={{ height: 400 }} />
    </div>
  )
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| block | 是否块级按钮 | boolean | `false` |
| plain | 是否朴素按钮 | boolean | `false` |