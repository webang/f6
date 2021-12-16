<div class="block-panel"><h3>基本用法</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <>
      <Field placeholder="请输入账户-受控" value={value} onChange={(v) => setValue(v)} />
      <Field title="账户" placeholder="请输入账户" />
      <div style={{ height: 10 }}></div>
      <Button block onClick={() => setValue(v => v + 1)}>++</Button>
    </>
  );
}
```
</div>

<div class="block-panel"><h3>输入校验</h3>

```jsx
import { Field, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <>
      <Field title="账户" placeholder="请输入账户" rules={rules} />
      <Field title="密码" placeholder="请输入密码" />
    </>
  );
}
```
</div>

<div class="block-panel"><h3>长文本输入</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <Field title="密码" type="textarea" placeholder="请输入密码" />
  );
}
```
</div>

<div class="block-panel"><h3>响应事件</h3>

```jsx
import { Field, Toast } from "f6";

export default function () {
  return (
    <>
      <Field
        placeholder="focus-blur-change"
        onChange={() => {
          Toast.show({ message: "change", duration: 2000 });
        }}
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
        onBlur={() => {
          Toast.show({ message: "blur", duration: 2000 });
        }}
      />
    </>
  );
}
```
</div>

<div class="block-panel"><h3>输入密码</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <Field title="密码" type="password" placeholder="请输入密码" />
  );
}
```
</div>

<div class="block-panel">
<h3> FieldProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| type | 输入框类型 | `string \| number \| textarea` | `text` |
| value | 当前值 | string | - |
| defaultValue | 默认值 | string | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| clearable | 展示清除按钮 | `boolean` | `true` |
| placeholder | 提示 | `string` | `true` |
| rules | 校验规则列表 | FieldRule[] | `[]` |
| immediateCheck | 首次挂载是否检验 | `boolean` | `false` |
| resetErrorOnClear | 当清空时，清除错误提示 | `boolean` | `true` |
| onChange | 变化事件 | `(value?: string) => void` | - |
| onFocus | 聚焦事件 | `() => void` | - |
| onBlur | 失焦事件 | `() => void` | - |

```tsx
export interface FieldProps {
  title?: ReactNode;
  type?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface FieldRule {
  test: (val: string) => boolean;   // 校验规则
  message: ReactNode;               // 当 test 返回 true，用于展示的错误提示信息
}
```
</div>