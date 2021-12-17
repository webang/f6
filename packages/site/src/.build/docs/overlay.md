<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/overlay/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Overlay } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <div>
      <Button color="primary" onClick={show}>点击显示</Button>
      <Overlay onClick={hide} visible={visible} />
    </div>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/overlay/demo/children.md>更新此演示代码</a>
        <h3>嵌入内容</h3>

```jsx
import React from 'react';
import { Button, Overlay } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '12px 16px',
    backgroundColor: '#fff',
    transform: 'translate3d(-50%, -50%, 0)'
  };

  return (
    <div>
      <Button color="primary" onClick={show}>点击显示</Button>
      <Overlay onClick={hide} visible={visible}>
        <div style={style}>hello world</div>
      </Overlay>
    </div>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

thi is Props content


</div>
<div class="block-panel">

<h3>API</h3>

this is API content
</div>