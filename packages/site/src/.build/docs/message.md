<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/message/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading, Message } from 'f6';

const style = {
  marginBottom: 10
}

function App() {
  return (
    <>
      <Message color="primary" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="warning" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="danger" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="success" style={style}>这是一段默认的普通文字描述，这是一段默认的普通文字描述，这是一段默认的普通文字描述，这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/message/demo/link.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading, Message } from 'f6';

const style = {
  marginBottom: 10
}

function App() {
  return (
    <>
      <Message color="primary" style={style} link>这是一段默认的普通文字描述</Message>
      <Message type="warning" style={style} link>这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/message/demo/icon.md>更新此演示代码</a>
        <h3>自定义ICON</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading, Message } from 'f6';

const style = {
  marginBottom: 10
}

function App() {
  return (
    <>
      <Message color="primary" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="warning" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="danger" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="success" style={style}>这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
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