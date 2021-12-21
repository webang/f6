<div class="block-panel">

<h3>介绍</h3>

`TextArea` 文本域输入。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/text-area/demo/basic.md>更新此演示代码</a>
        <h3>基本使用</h3>

```jsx
import { Cell, TextArea, Input, Toast } from "f6";

export default function () {
  return (
    <div style={{ padding: 10,  background: '#fff' }}>
      <TextArea placeholder="请输入账户" />
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/text-area/demo/autosize.md>更新此演示代码</a>
        <h3>自适应高度</h3>

```jsx
import { Cell, TextArea, Input, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <div style={{ padding: 10,  background: '#fff' }}>
      <TextArea autoSize placeholder="请输入账户" rules={rules} />
    </div>
  );
}
```
</div>
<div class="block-panel">

<h3>FieldProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
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
| showCount | 是否显示计数器 | `boolean` | `true` |
| autoSize | 是否自适应高度 | `boolean` | `false` |

```tsx
export interface FieldRule {
  test: (val: string) => boolean;
  message: string;
}

export interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showCount?: boolean;
  autoSize?: { minRows: number; maxRows: number } | boolean;
}
```
</div>