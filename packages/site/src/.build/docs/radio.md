<div class="block-panel">

<h3>介绍</h3>

`Radio` 单选框。

> 只有手动点击，才会出发 onChange 事件


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from "react";
import { Radio, Cell, Toast, Button, Space } from "f6";

export default function App() {
  const [checked, setChecked] = React.useState(true);
  const onChange = (v) => {
    setChecked(v);
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  }
  const onChange2 = (v) => {
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  }

  return (
    <Space direction="vertical">
      <Radio onChange={onChange} checked={checked}>深圳</Radio>
      <Radio onChange={onChange2} defaultChecked={true}>北京</Radio>
      <Radio defaultChecked={true} disabled>北京</Radio>
      <Radio disabled>深圳</Radio>
    </Space>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/block.md>更新此演示代码</a>
        <h3>占据整行</h3>

```jsx
import React from 'react';
import { Radio, Space, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group defaultValue="1" onChange={onChange}>
      <Space direction="vertical">
        <Radio value={"1"}>北京</Radio>
        <Radio value={"2"}>深圳</Radio>
      </Space>
    </Radio.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/group.md>更新此演示代码</a>
        <h3>单选组</h3>

```jsx
import React from 'react';
import { Radio, Space, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group defaultValue="1" onChange={onChange}>
      <Space>
        <Radio value={"1"}>北京</Radio>
        <Radio value={"2"}>深圳</Radio>
      </Space>
    </Radio.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/disabled.md>更新此演示代码</a>
        <h3>全组禁用</h3>

```jsx
import React from 'react';
import { Radio, Space, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group disabled defaultValue="1" onChange={onChange}>
      <Space>
        <Radio value={"1"}>北京</Radio>
        <Radio value={"2"}>深圳</Radio>
      </Space>
    </Radio.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/icon.md>更新此演示代码</a>
        <h3>自定义图标</h3>

```jsx
import React from "react";
import Icon from "f6-icons";
import { Radio, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  const renderIcon = (v) => {
    return v ? <Icon name="success" /> : <Icon name="home" />;
  };
  const mRadio = () => {
    return (
      <Radio icon={renderIcon} onChange={onChange} defaultChecked={v}>
        北京
      </Radio>
    );
  };
  return <Cell title="图标" value={mRadio()}></Cell>;
}
```
</div>
<div class="block-panel">

<h3>Radio</h3>

```tsx
export type RadioValue = string|number;

export interface RadioProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  onChange: (checked: boolean) => void;
  icon: (checked: boolean) => ReactNode;
  block?: boolean;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultChecked | 默认选状态中 | `boolean` | `false` |
| checked | 当前是否选中 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| value | 在 group 中的标识 | `RadioValue` | - |
| onChange | change callback | `(checked: boolean) => void` | - |
| icon | 图标 | `icon: (checked: boolean) => ReactNode` | - |
| block | block element | `boolean` | `false` | 


</div>
<div class="block-panel">

<h3>Radio.Group</h3>

```tsx
export interface RadioGroupProps {
  defaultValue?: RadioValue|null;
  value?: RadioValue|null;
  disabled?: boolean;
  onChange?: (val: RadioValue|null) => void;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultValue | 默认值 | `RadioValue` | `false` |
| value | 当前值 | `RadioValue` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| onChange | change callback | `(value: RadioValue) => void` | - |
</div>