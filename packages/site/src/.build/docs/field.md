<div class="block-panel">

<h3>介绍</h3>

`Field` 基于 `HTMLInputElement` 封装了一层，用于自定义一些功能以及样式美化，它常常和 `Cell` 组件搭配使用。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useState } from "react";
import { Field, Cell, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("");
  return (
    <>
      <Cell title="账户">
        <Field
          placeholder="请输入账户"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </Cell>
      <Cell title="账户">
        <Field title="账户" placeholder="请输入账户" />
      </Cell>
      <div style={{ height: 8 }}></div>
      <Button block onClick={() => setValue((v) => v + 1)}>
        ++
      </Button>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/disabled.md>更新此演示代码</a>
        <h3>禁止输入</h3>

```jsx
import { useState } from "react";
import { Cell, Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("hello world");
  return (
    <>
      <Cell title="账户">
        <Field title="账户" disabled placeholder="请输入账户" />
      </Cell>
      <Cell title="账户">
        <Field title="账户" value={value} disabled placeholder="请输入账户" />
      </Cell>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/event.md>更新此演示代码</a>
        <h3>响应事件</h3>

```jsx
import { Cell, Field, Toast } from "f6";

export default function () {
  return (
    <Cell title="相应事件">
      <Field
        placeholder="focus change blur"
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
    </Cell>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/readOnly.md>更新此演示代码</a>
        <h3>只读状态</h3>

```jsx
import { useState } from "react";
import { Cell, Field } from "f6";

export default function () {
  const [value, setValue] = useState("hello world");

  return (
    <>
      <Cell title="账户">
        <Field readOnly placeholder="请输入账户" />
      </Cell>
      <Cell title="账户">
        <Field title="账户" value={value} readOnly placeholder="请输入账户" />
      </Cell>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/rules.md>更新此演示代码</a>
        <h3>输入校验</h3>

```jsx
import { Cell, Field, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <>
      <Cell title="账户">
        <Field placeholder="请输入账户" rules={rules} />
      </Cell>
      <Cell title="账户">
        <Field
          validateOnBlur={true}
          validateOnChange={false}
          placeholder="blur时检验"
          rules={rules}
        />
      </Cell>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/password.md>更新此演示代码</a>
        <h3>输入密码</h3>

```jsx
import { useState } from 'react';
import { Cell, Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <Cell title="密码">
      <Field type="password" placeholder="请输入密码" />
    </Cell>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/titlePosition.md>更新此演示代码</a>
        <h3>上下布局</h3>

```jsx
import { useState } from "react";
import { Cell, Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("");

  return (
    <>
      <Cell titleAlign="top" title="密码">
        <Field
          placeholder="请输入账户"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </Cell>
      <Cell titleAlign="top" title="密码">
        <Field placeholder="请输入账户" />
      </Cell>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>FieldProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 输入框类型 | `string \| number \| textarea` | `text` |
| value | 当前值 | string | - |
| defaultValue | 默认值 | string | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| clearable | 展示清除按钮 | `boolean` | `true` |
| placeholder | 提示 | `string` | `true` |
| rules | 校验规则列表 | FieldRule[] | `[]` |
| validateOnBlur | blur时校验 | `boolean` | `true` |
| validateOnChange | change时校验 | `boolean` | `true` |
| immediateCheck | 首次挂载是否检验 | `boolean` | `false` |
| resetErrorOnClear | 当清空时，清除错误提示 | `boolean` | `true` |
| onChange | 变化事件 | `(value?: string) => void` | - |
| onFocus | 聚焦事件 | `() => void` | - |
| onBlur | 失焦事件 | `() => void` | - |

```tsx
export interface FieldProps {
  type?: FieldType;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export type FieldType = "text" | "number" | "password";
export type FieldTitlePosition = 'top' | 'left';
export interface FieldRule {
  test: (val: string) => boolean;   // 校验规则
  message: string;                  // 当 test 返回 true，用于展示的错误提示信息
}
```
</div>