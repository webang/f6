<div class="block-panel">
      <script>var code =`import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Checkbox onChange={onChange} checked={v}>北京</Checkbox>}></Cell>
      <Cell title="格子" value={<Checkbox>深圳</Checkbox>}></Cell>
    </Cell.Group>
  )
}
`; console.log(code)</script>
      <h3>基本用法</h3>

```jsx
import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Checkbox onChange={onChange} checked={v}>北京</Checkbox>}></Cell>
      <Cell title="格子" value={<Checkbox>深圳</Checkbox>}></Cell>
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
      <script>var code =`import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Checkbox onChange={onChange} checked={v}>北京</Checkbox>}></Cell>
      <Cell title="格子" value={<Checkbox disabled>深圳</Checkbox>}></Cell>
    </Cell.Group>
  )
}
`; console.log(code)</script>
      <h3>禁用状态</h3>

```jsx
import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Checkbox onChange={onChange} checked={v}>北京</Checkbox>}></Cell>
      <Cell title="格子" value={<Checkbox disabled>深圳</Checkbox>}></Cell>
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
      <script>var code =`import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v.join(',') })
  }
  return (
    <Checkbox.Group defaultValue="1" onChange={onChange}>
      <Checkbox value={"1"} >北京</Checkbox>
      <Checkbox value={"2"} >深圳</Checkbox>
    </Checkbox.Group>
  )
}
`; console.log(code)</script>
      <h3>单选组</h3>

```jsx
import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v.join(',') })
  }
  return (
    <Checkbox.Group defaultValue="1" onChange={onChange}>
      <Checkbox value={"1"} >北京</Checkbox>
      <Checkbox value={"2"} >深圳</Checkbox>
    </Checkbox.Group>
  )
}
```
</div>

<div class="block-panel">
      <script>var code =`import React from 'react';
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
`; console.log(code)</script>
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

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| checked | 选中 | string | `default` |