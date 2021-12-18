---
category: 操作反馈
title: Dialog
subTitle: 对话框
---

### 介绍

`Dialog` 用于展示弹窗，它实现了 `window.alert` 和 `window.confirm` 的功能。主要提供以下使用方式：
- `<Dialog />` 声明式
- Dialog.show 同步 API
- Dialog.alert 异步 API
- Dialog.confirm 异步 API

### DialogProps

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

### Dialog.show

```tsx
export type DialogShowProps = Omit<DialogProps, "visible">;
export type DialogShowRef = {
  close: () => void;
  forceClose: () => void;
};
```

### Dialog.alert

```tsx
export type AlertDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton" | "onCancel" | "cancelText"
>;
```

### Dialog.confirm

```tsx
export type ConfirmDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton"
>;
```