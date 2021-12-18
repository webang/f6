<div class="block-panel">

<h3>介绍</h3>

`Message` 常用于显著的展示一段提示。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/message/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Message } from 'f6';

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
import React from "react";
import { Space, Toast, Message } from "f6";

function App() {
  return (
    <Space direction="vertical">
      <Message
        onClick={() => {
          Toast.show({ message: "别点我啊 💋" });
        }}
        color="primary"
        link
      >
        这是一段默认的普通文字描述
      </Message>
      <Message type="warning" link>
        这是一段默认的普通文字描述
      </Message>
    </Space>
  );
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/message/demo/icon.md>更新此演示代码</a>
        <h3>自定义ICON</h3>

```jsx
import React from 'react';
import { Message } from 'f6';

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

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 类型 | 见下 | `primary` |
| icon | 图标 | `ReactNode` | - |
| link | 展示箭头 | `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |

```tsx
export interface MessageProps {
  type?: 'primary' |  'success' | 'warning' | 'danger';
  icon?: ReactNode;
  link?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
```
</div>