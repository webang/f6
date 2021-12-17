<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading } from 'f6';

const style = {
  marginRight: 10
}

function App() {
  return (
    <>
      <Loading style={style} spinnerType="lines">Loading</Loading>
      <Loading style={style} spinnerType="oval">Loading</Loading>
      <Loading style={style} spinnerType="crescent">Loading</Loading>
    </>
  )
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/size.md>更新此演示代码</a>
        <h3>自定义大小</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading } from 'f6';

const style = {
  marginRight: 10
}

export default function App() {
  return (
    <>
      <Loading spinnerSize={20} style={style} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={24} style={style} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={30} style={style} spinnerType="lines">Loading</Loading>
    </>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/color.md>更新此演示代码</a>
        <h3>设置颜色</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <div>
      <Loading style={{ color: '#3f51b5' }}>Loading</Loading>
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