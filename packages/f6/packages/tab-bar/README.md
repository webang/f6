---
category: 导航组件
title: NavBar
subTitle: 导航栏
---

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### TabBarProps API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| activeKey | 当前激活项 | `string` | - |
| defaultActiveKey | 默认激活项 | `string` | - |
| onChange | 激活项改变事件 | `(key: string) => void` | - |

```ts
export interface TabBarProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
}
```

### TabBarItemProps API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| icon | 图标 | `React.ReactNode` \| `(active: boolean) => React.ReactNode` | - |
| title | 标题 | `React.ReactNode` | - |
| key | 标识 | `string` | - |
| badge | 徽章 | `string` \|  `number` \| `symbol` | - |

```tsx
export type TabBarItemProps = {
  icon?: React.ReactNode | ((active: boolean) => React.ReactNode);
  title?: string;
  key?: string;
  badge?: string | number | symbol;
  className?: string;
  style?: CSSProperties;
};
```