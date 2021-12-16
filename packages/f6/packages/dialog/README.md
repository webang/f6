---
category: 操作反馈
title: Dialog
subTitle: 对话框
---

### DialogProps

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