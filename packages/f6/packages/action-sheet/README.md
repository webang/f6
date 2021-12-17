---
category: 操作反馈
title: ActionSheet
---

### 介绍

ActionSheet 用于从底部弹起一个可操作清单。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | visibility | `boolean` | `false` |
| title | 标题 | `ReactNode` | - |
| actions | 配置列表 | `ActionItem[]` | `[]` |
| borderRadiusSize | 圆角大小 | `number` | `12` |
| onClose | 关闭事件 | `() => void` | - |
| callback | 选项点击事件 | `(index: number) => void` | - |

```ts
export interface ActionItem {
  name: ReactNode;
  desc?: ReactNode;
  render?: () => ReactNode;
}

export interface ActionSheetProps {
  className?: string;
  title?: ReactNode;
  actions?: ActionItem[];
  visible: boolean;
  borderRadiusSize: number;
  onClose?: () => void;
  callback?: (index: number) => void;
}
```