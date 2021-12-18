<div class="block-panel">

<h3>介绍</h3>

`PasswordInput` 特定方式输入密码，主要是外观美化。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/password-input/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { PasswordInput, Toast } from "f6";

export default function App() {
  return (
    <div>
      <PasswordInput
        onChange={(val) => {
          Toast.show({ message: val.join("-") });
        }}
      />
    </div>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| count | 密码长度 | `number` | `6` |
| onChange | - | `[]string` | - |

```tsx
export interface PasswordInputProps {
  className?: string;
  count?: number;
  onChange?: (val: string[]) => void;
}
```
</div>