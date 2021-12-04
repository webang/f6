---
category: 展示组件
title: Grid
subTitle: 宫格
---

### FieldProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 输入框类型 | boolean | `text` |
| defaultValue | 默认值 | string | `''` |
| clearable | 展示清除按钮 | boolean | `true` |
| label | 标题 | string | `''` |
| immediateCheck | 首次挂载是否检验 ｜ boolean | `false` |
| rules | 匹配规则 | Rule[] | `[]` |

```tsx
export interface Rule {
  // 校验规则
  test: (val: string) => boolean;
  // 当 test 返回 true 时，展示的错误信息
  message: string;
}
```