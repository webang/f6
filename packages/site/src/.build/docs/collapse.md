<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Collapse, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Collapse
        defaultOpenKeys={["B"]}
      >
        <Collapse.Item name="1" title="李白">
          天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
        </Collapse.Item>
        <Collapse.Item name="2" title="杜甫">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
        <Collapse.Item name="3" title="苏轼">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 按钮类型，可选值为：`primary` `info` `success` `warning` `danger` | string | `default` |
| size | 按钮大小，可选值为：`large` `middle` `small` `mini` | string | `middle` |
| square | 按钮形状，可选值为：`square` `round` | string | `square` |
| block | 是否块级按钮 | boolean | `false` |
| plain | 是否朴素按钮 | boolean | `false` |
| loading | 是否加载状态 | boolean | `false` |
| disabled | 是否禁用状态 | boolean | `false` |
| title | 按钮文字 | ReactNode | - |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |