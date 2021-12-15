---
category: 展示组件
title: Collapse
subTitle: 折叠面板
---

### CollapseProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultOpenKeys | 默认打开配置 | `[]string` | `[]` |
| multiple | 是否多个同时打开 | `boolean` | false |

```tsx
export interface CollapseProps {
  className?: string;
  defaultOpenKeys: string[];
  multiple?: boolean;
}
```

### CollapseItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| name | 名称(唯一) | `string` | - |
| title | 标题 | `React.ReactNode` | - |

```tsx
export interface CollapseItemProps {
  className?: string;
  name: string;
  title: React.ReactNode;
}
```