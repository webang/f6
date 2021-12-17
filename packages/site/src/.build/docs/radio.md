<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Radio onChange={onChange} checked={v}>北京</Radio>}></Cell>
      <Cell title="格子" value={<Radio>深圳</Radio>}></Cell>
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/disabled.md>更新此演示代码</a>
        <h3>禁用状态</h3>

```jsx
import React from 'react';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Radio onChange={onChange} checked={v}>北京</Radio>}></Cell>
      <Cell title="格子" value={<Radio disabled>深圳</Radio>}></Cell>
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/group.md>更新此演示代码</a>
        <h3>单选组</h3>

```jsx
import React from 'react';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group defaultValue="1" onChange={onChange}>
      <Radio value={"1"} >北京</Radio>
      <Radio value={"2"} >深圳</Radio>
    </Radio.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/radio/demo/icon.md>更新此演示代码</a>
        <h3>自定义图标</h3>

```jsx
import React from 'react';
import Icon from 'f6-icons';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  });
  const renderIcon = (v) => {
    return v ? <Icon name="checkbox" /> : <Icon name="radio-on" />;
  }
  const mRadio = () => {
    return <Radio icon={renderIcon} onChange={onChange} checked={v}>北京</Radio>
  }
  return (
    <Cell.Group>
      <Cell title="格子" value={mRadio()}></Cell>
      <Cell title="格子" value={<Radio>深圳</Radio>}></Cell>
    </Cell.Group>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| checked | 选中 | string | `default` |
</div>