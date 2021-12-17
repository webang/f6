<div class="block-panel">

<h3>介绍</h3>

Field 的实现依赖 Cell。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

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

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/disabled.md>更新此演示代码</a>
        <h3>禁止输入</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('hello world')

  return (
    <>
      <Field title="账户" disabled placeholder="请输入账户" />
      <Field title="账户" value={value} disabled placeholder="请输入账户" />
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/readOnly.md>更新此演示代码</a>
        <h3>只读状态</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('hello world')

  return (
    <>
      <Field title="账户" readOnly placeholder="请输入账户" />
      <Field title="账户" value={value} readOnly placeholder="请输入账户" />
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/rules.md>更新此演示代码</a>
        <h3>输入校验</h3>

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

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/validateWhen.md>更新此演示代码</a>
        <h3>校验时机</h3>

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
      <Field title="账户" validateOnChange={false} placeholder="blur时检验" rules={rules} />
      <Field title="账户" placeholder="请输入密码" placeholder="blur & change 都检验" rules={rules} />
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/event.md>更新此演示代码</a>
        <h3>响应事件</h3>

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

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/password.md>更新此演示代码</a>
        <h3>输入密码</h3>

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
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/field/demo/titlePosition.md>更新此演示代码</a>
        <h3>上下布局</h3>

```jsx
import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <>
      <Field titlePosition="top" title="密码" placeholder="请输入账户" value={value} onChange={(v) => setValue(v)} />
      <Field titlePosition="top" title="账户" placeholder="请输入账户" />
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>FieldProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| titlePosition | 标题位置 | `FieldTitlePosition` | - |
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
  title?: ReactNode;
  titlePosition: FieldTitlePosition;
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
  message: ReactNode;               // 当 test 返回 true，用于展示的错误提示信息
}
```
</div>