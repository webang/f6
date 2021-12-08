<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <CheckList defaultValue={["B"]} onChange={(v) => Toast.show({ message: v })}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C" disabled>
          C
        </CheckList.Item>
        <CheckList.Item value="D" readOnly>
          D
        </CheckList.Item>
      </CheckList>
    </div>
  );
}
```
</div>

<div class="block-panel"><h3>多选</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <CheckList defaultValue={["B"]} multiple onChange={(v) => Toast.show({ message: v })}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C" disabled>
          C
        </CheckList.Item>
      </CheckList>
    </div>
  );
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultValue | 默认选中 |  `string[]` | `[]` |
| multiple | 是否多选 | `boolean` | `true` |
| onChange | 监听变化 | - | - |