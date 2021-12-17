<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/check-list/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        onChange={(v) => Toast.show({ message: v })}
      >
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C" disabled>
          C
        </CheckList.Item>
        <CheckList.Item value="D">D</CheckList.Item>
      </CheckList>
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/check-list/demo/multiple.md>更新此演示代码</a>
        <h3>设置多选</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        multiple
        onChange={(v) => Toast.show({ message: v })}
      >
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
<div class="block-panel">

<h3>CheckListProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 当前值 |  `string[]` | `[]` |
| defaultValue | 默认值 |  `string[]` | `[]` |
| multiple | 是否多选 | `boolean` | `true` |
| onChange | 监听变化 | `(value: string[]) => void` | - |

```ts
export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  activeIcon?: ReactNode;
  onChange?: (value: string[]) => void;
}
```


</div>
<div class="block-panel">

<h3>CheckListItemProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 代表值 |  `string` | `[]` |
| disabled | 禁选状态 |  `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |

```tsx
export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
}
```
</div>