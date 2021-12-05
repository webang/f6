<div class="block-panel"><h3>基本用法</h3>

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

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| count | 密码长度 | number | `6` |
| onChange | - | []string | '-' |