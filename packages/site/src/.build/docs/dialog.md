<div class="block-panel">
<h3>下拉菜单</h3>

```jsx
import React from "react";
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setVisible(true)}>显示</Button>
      </div>
      <Dialog
        showCancelButton={false}
        onOk={(index) => {
          setVisible(false)
        }}
        visible={visible}
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```
</div>

<div class="block-panel">
<h3>confirm</h3>

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>显示</Button>
      <Dialog
        onOk={(index) => {
          setVisible(false);
        }}
        onCancel={(index) => {
          setVisible(false);
        }}
        visible={visible}
        title="提示"
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```
</div>

<div class="block-panel">
<h3>alert 函数调用</h3>

```jsx
import React from 'react';
import { Dialog, Button, Toast } from "f6";

const alertDefault = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world'
  });
  Toast.show({ message: res })
}

const alertWithOnOk = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      // 如果没有返回值，则返回 ok
      return '你点击了 ok'
    }
  });
  Toast.show({ message: res })
}

const alertWithSyncOnOk = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('😁'), 500)
      })
    }
  });
  Toast.show({ message: res })
}

const alertWithOnClose = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return '😁'
    },
    onClose: () => {
      return true
    }
  });
  Toast.show({ message: res })
}

export default function App() {
  return (
    <>
      <Button block  onClick={() => alertDefault()}>默认返回 ok</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithOnOk()}>自定义 onOk 返回值</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithSyncOnOk()}>是用异步的 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithOnClose()}>onClose 控制是否关闭</Button>
    </>
  );
}
```
</div>

<div class="block-panel">
<h3>confirm 函数调用</h3>

```jsx
import React from 'react';
import { Dialog, Button, Toast } from "f6";

const showDefault = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world'
  });
  Toast.show({ message: res })
}

const showWithOnOk = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      // 如果没有返回值，则返回 ok
      return '你点击了 ok'
    },
    onCancel: () => {
      // 如果没有返回值，则返回 cancel
      return '你点击了 cancel'
    }
  });
  Toast.show({ message: res })
}

const showWithSyncOnOk = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('onOk 😁'), 500)
      })
    },
    onCancel: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('onCancel 😁'), 500)
      })
    }
  });
  Toast.show({ message: res })
}

const showWithOnClose = async () => {
  let count = 0;
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return '😁'
    },
    onClose: () => {
      count++;
      return count > 2
    }
  });
  Toast.show({ message: res })
}

export default function App() {
  return (
    <>
      <Button block  onClick={() => showDefault()}>简单调用</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithOnOk()}>自定义 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithSyncOnOk()}>异步 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithOnClose()}>onClose 控制是否关闭</Button>
    </>
  );
}
```
</div>

<div class="block-panel">
<h3>show 函数调用</h3>

```jsx
import React from "react";
import { Dialog, Button, Toast } from "f6";

const showDefault = () => {
  const res = Dialog.show({
    title: "message",
    message: "hello world",
    onClose: () => true,
  });
};

const forceClose = () => {
  const res = Dialog.show({
    title: "message",
    message: "hello world",
    onClose: () => false,
    onOk: () => {
      res.forceClose();
      Toast.show({ message: "你点击了 ok" });
    },
  });
};

export default function App() {
  return (
    <>
      <Button block onClick={() => showDefault()}>
        简单使用
      </Button>
      <div style={{ height: 10 }}></div>
      <Button block onClick={() => forceClose()}>
        forceClose
      </Button>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>DialogProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | visibility | `boolean` | `false` |
| title | 标题 | `ReactNode` | - |
| message | 内容 | `ReactNode` | - |
| showCancelButton | 展示 cancel 按钮 | `boolean` | `false` |
| showConfirmButton | 展示 ok 按钮 | `boolean` | `false` | 
| okText | ok 按钮文字 | `ReactNode` | `ok` |
| cancelText | cancel 按钮文字 | `ReactNode` | `cancel` |
| appear | 首次挂载动画 | `boolean` | `true` |
| onOk | ok 点击事件 | `() => void` | `-` |
| onCancel | cancel 点击事件 | `() => void` | `-` |
| onClosed | 关闭完成后触发 | `() => void` | `-` |
| onClose | 关闭前触发，返回 false 表示不关闭，返回 true 表示关闭 | `() => void` | `-` |

```tsx
export interface DialogProps {
  visible?: boolean;
  title?: React.ReactNode;
  message?: React.ReactNode;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  animationDuration?: number;
  okText?: ReactNode;
  cancelText?: ReactNode;
  appear: boolean; // 首次挂载动画
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
}

// Dialog.show 同步API
export type DialogShowProps = Omit<DialogProps, "visible">;
export type DialogShowRef = {
  close: () => void;       // 关闭，会走 onClose
  forceClose: () => void;  // 强制关闭，不走 onClose 
};

// Dialog.alert 异步API
// Dialog.confirm 异步API
```
</div>