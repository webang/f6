<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Cell, Field, Toast, Button } from "f6";

const button = (
  <Button size="mini" type="primary">
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
      <Field placeholder="请输入账户" rules={rules} />
      <Field
        placeholder="请输入密码"
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
      />
      <div style={{ height: 16 }}></div>
      <Field label="账户" placeholder="请输入账户" rules={rules} />
      <Field
        label="密码"
        placeholder="请输入密码"
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
      />
    </>
  );
}
```
</div>

### FieldProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 输入框类型 | boolean | `text` |
| defaultValue | 默认值 | string | `''` |
| clearable | 展示清除按钮 | boolean | `true` |
| label | 标题 | string | `''` |
| immediateCheck | 首次挂载是否检验 ｜ boolean | `false` |
| rules | 匹配规则 | Rule[] | `[]` |

```tsx
export interface Rule {
  // 校验规则
  test: (val: string) => boolean;
  // 当 test 返回 true 时，展示的错误信息
  message: string;
}
```