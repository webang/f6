<div class="block-panel">

<h3>介绍</h3>

`CheckList` 选择清单，可以设置单选或者复选。


</div>
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
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/check-list/demo/icon.md>更新此演示代码</a>
        <h3>自定义图标</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";
import Icon from 'f6-icons';

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        onChange={(v) => Toast.show({ message: v })}
        renderIcon={(v) => {
          return v ? <Icon name="checkbox" /> : <Icon name="checkbox-o" />
        }}
      >
        <CheckList.Item value="A">苹果</CheckList.Item>
        <CheckList.Item value="B">香蕉</CheckList.Item>
        <CheckList.Item value="C" disabled>
          蔬菜
        </CheckList.Item>
        <CheckList.Item value="D">橘子</CheckList.Item>
      </CheckList>
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/check-list/demo/layout.md>更新此演示代码</a>
        <h3>布局方式</h3>

```jsx
import { Affix, CheckList, Toast } from "f6";
import Icon from "f6-icons";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        onChange={(v) => Toast.show({ message: v })}
        labelPosition="right"
        renderIcon={(v) => {
          return v ? <Icon name="checkbox" /> : <Icon name="checkbox-o" />;
        }}
      >
        <CheckList.Item value="A">苹果</CheckList.Item>
        <CheckList.Item value="B">香蕉</CheckList.Item>
        <CheckList.Item value="C" disabled>
          蔬菜
        </CheckList.Item>
        <CheckList.Item value="D">橘子</CheckList.Item>
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
| renderIcon | 图标 | `(checked: boolean) => ReactNode` | - |
| labelPosition | 标题位置 | `left \| right` |  `left` |

```ts
export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  renderIcon?: (checked: boolean) => ReactNode;
  onChange?: (value: string[]) => void;
  labelPosition?: 'left' | 'right'
}

const defaultProps = {
  multiple: false,
  defaultValue: [],
  labelPosition: 'left' as 'left' | 'right'
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
| renderIcon | 图标 | `(checked: boolean) => ReactNode` | - |

```tsx
export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  renderIcon?: (checked: boolean) => ReactNode;
}
```
</div>