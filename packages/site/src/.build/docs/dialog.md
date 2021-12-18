<div class="block-panel">

<h3>介绍</h3>

`Dialog` 用于展示弹窗，它实现了 `window.alert` 和 `window.confirm` 的功能。主要提供以下使用方式：
- `<Dialog />` 声明式
- Dialog.show 同步 API
- Dialog.alert 异步 API
- Dialog.confirm 异步 API


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/dialog/demo/basic.md>更新此演示代码</a>
        <h3>基本使用</h3>

组件式调用。

```jsx
import React from "react";
import { Dialog, Toast, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button block onClick={() => setVisible(true)}>显示弹窗</Button>
      <Dialog
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClose={() => {
          Toast.show({ message: '我要走了，毋念' })
        }}
        onClosed={() => {
          Toast.show({ message: '我无了' })
        }}
        visible={visible}
        title="元气"
        content="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/dialog/demo/show.md>更新此演示代码</a>
        <h3>Dialog.show</h3>

```jsx
import React from "react";
import { Dialog, Button, Toast } from "f6";

const showBasic = () => {
  const res = Dialog.show({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onClose: () => true,
  });
};

export default function App() {
  return (
    <Button block onClick={() => showBasic()}>
      简单使用
    </Button>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/dialog/demo/alert.md>更新此演示代码</a>
        <h3>Dialog.alert</h3>

```jsx
import React from "react";
import { Dialog, Space, Button, Toast } from "f6";

export default function App() {
  return (
    <Space direction="vertical">
      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "元气",
            content: "窈窕淑女，君子说好逑",
          });
          Toast.show({ message: res });
        }}
      >
        默认返回
      </Button>

      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => "😁",
          });
          Toast.show({ message: res });
        }}
      >
        自定义返回值
      </Button>

      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => {
              return new Promise((resolve) => {
                setTimeout(() => resolve("😁"), 200);
              });
            },
          });
          Toast.show({ message: res });
        }}
      >
        异步回调
      </Button>

      <Button
        block
        onClick={async () => {
          let count = 0;
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => {
              return "😁";
            },
            onClose: () => {
              count++;
              return count > 2;
            },
          });
          Toast.show({ message: res });
        }}
      >
        控制是否关闭
      </Button>
    </Space>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/dialog/demo/confirm.md>更新此演示代码</a>
        <h3>confirm 函数调用</h3>

```jsx
import React from "react";
import { Dialog, Space, Button, Toast } from "f6";

const showDefault = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
  });
  Toast.show({ message: res });
};

const showWithOnOk = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return "你点击了 ok";
    },
    onCancel: () => {
      return "你点击了 cancel";
    },
  });
  Toast.show({ message: res });
};

const showWithSyncOnOk = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("onOk 😁"), 500);
      });
    },
    onCancel: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("onCancel 😁"), 500);
      });
    },
  });
  Toast.show({ message: res });
};

const showWithOnClose = async () => {
  let count = 0;
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return "😁";
    },
    onClose: () => {
      count++;
      return count > 2;
    },
  });
  Toast.show({ message: res });
};

export default function App() {
  return (
    <Space direction="vertical">
      <Button block onClick={() => showDefault()}>
        简单调用
      </Button>
      <Button block onClick={() => showWithOnOk()}>
        自定义返回
      </Button>
      <Button block onClick={() => showWithSyncOnOk()}>
        异步调用
      </Button>
      <Button block onClick={() => showWithOnClose()}>
        控制是否关闭
      </Button>
    </Space>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/dialog/demo/content.md>更新此演示代码</a>
        <h3>自定义content</h3>

```jsx
import React from "react";
import { Dialog, Button, Toast } from "f6";

const showBasic = () => {
  const res = Dialog.show({
    title: "惊喜",
    content: (
      <div>
        <img
          width="100%"
          src="https://img2.baidu.com/it/u=1191421309,3524520139&fm=26&fmt=auto"
        />
        <Button block color="primary" title="立即前往" />
      </div>
    ),
    onClose: () => true,
  });
};

export default function App() {
  return (
    <Button block onClick={() => showBasic()}>
      简单使用
    </Button>
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
| content | 内容 | `ReactNode` | - |
| showCancelButton | 展示 cancel 按钮 | `boolean` | `false` |
| showConfirmButton | 展示 ok 按钮 | `boolean` | `false` | 
| okText | ok 按钮文字 | `ReactNode` | `ok` |
| cancelText | cancel 按钮文字 | `ReactNode` | `cancel` |
| appear | 首次挂载动画 | `boolean` | `true` |
| onOk | ok 点击事件 | `() => void` | `-` |
| onCancel | cancel 点击事件 | `() => void` | `-` |
| onClosed | 关闭完成后(动画结束)后触发 | `() => void` | `-` |
| onClose | 关闭前触发，返回 false 表示不关闭，返回 true 表示关闭，通过方法调用时有用 | `() => void` | `-` |

```tsx
export interface DialogProps {
  visible?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
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
```


</div>
<div class="block-panel">

<h3>Dialog.show</h3>

```tsx
export type DialogShowProps = Omit<DialogProps, "visible">;
export type DialogShowRef = {
  close: () => void;
  forceClose: () => void;
};
```


</div>
<div class="block-panel">

<h3>Dialog.alert</h3>

```tsx
export type AlertDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton" | "onCancel" | "cancelText"
>;
```


</div>
<div class="block-panel">

<h3>Dialog.confirm</h3>

```tsx
export type ConfirmDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton"
>;
```
</div>