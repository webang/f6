---
category: 操作反馈
title: Toast
subTitle: 轻提示
---

### 介绍

在页面指定位置，展示半透明的弹窗提示，常用于加载提示，操作结果提示等场景，默认使用单例模式，可配置为非单例模式。

### Toast.show

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 提示类型 | `ToastType` | `text` |
| message | 提示内容 | `string` | `''` |
| position | 位置 | `ToastPosition` | - |
| duration | 展示的时长(ms)，当为 `0` 时，不会主动消失 | `number` | `1500` |

```tsx
export type ToastPosition = "top" | "bottom" | "middle";
export type ToastType = "text" | "loading" | "success" | "fail" | "warning";

export interface ToastProps {
  type?: ToastType;
  position?: ToastPosition;
  message: string;
  duration?: number;
  spinner?: SpinnerType;
}
```


`Toast.show` 返回一个引用，用于关闭或者修改内容。

| 属性 | 说明 | 类型 |
| :-  | :- | :- |
| close | 关闭弹窗 | `(force?: boolean) => void` |
| setContent | 设置弹窗内容 | `(message: string) => void` |

```tsx
interface ToastRef {
  close: (force?: boolean) => void;
  setContent: (message: string) => void;
}
```

### Toast.clear
清除所有 toast。

### Toast.config
配置默认属性。