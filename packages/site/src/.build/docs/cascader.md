<div class="block-panel">

<h3>介绍</h3>

`Cascader` 无限联动选择器，它的实现依赖 `Popup`。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cascader/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from "react";
import { Cascader, Cell, Button, Toast } from "f6";

export const options = [
  {
    label: "浙江",
    value: "浙江",
    children: [
      {
        label: "杭州",
        value: "杭州",
        children: [
          {
            label: "西湖区",
            value: "西湖区",
          },
          {
            label: "上城区",
            value: "上城区",
          },
        ],
      },
      {
        label: "温州",
        value: "温州",
        children: [
          {
            label: "龙湾区",
            value: "龙湾区",
            disabled: true,
          },
          {
            label: "瓯海区",
            value: "瓯海区",
          },
        ],
      },
      {
        label: "宁波",
        value: "宁波",
        children: [
          {
            label: "海曙区",
            value: "海曙区",
          },
          {
            label: "江北区",
            value: "江北区",
          },
        ],
      },
    ],
  },
  {
    label: "安徽",
    value: "安徽",
    children: [
      {
        label: "合肥",
        value: "合肥",
        children: [
          {
            label: "包河区",
            value: "包河区",
          },
          {
            label: "蜀山区",
            value: "蜀山区",
          },
        ],
      },
      {
        label: "芜湖",
        value: "芜湖",
        children: [
          {
            label: "镜湖区",
            value: "镜湖区",
          },
          {
            label: "弋江区",
            value: "弋江区",
          },
        ],
      },
    ],
  },
  {
    label: "江苏",
    value: "江苏",
    children: [
      {
        label: "南京",
        value: "南京",
        children: [
          {
            label: "玄武区",
            value: "玄武区",
          },
          {
            label: "秦淮区",
            value: "秦淮区",
          },
        ],
      },
      {
        label: "苏州",
        value: "苏州",
        children: [
          {
            label: "虎丘区",
            value: "虎丘区",
          },
          {
            label: "吴中区",
            value: "吴中区",
          },
        ],
      },
    ],
  },
];

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState("");
  const print = (list) => {
    setValue(list.map((it) => it.value).join("-"));
    setVisible(false);
  };

  return (
    <>
      <Cell
        title="取件地址"
        value={value}
        link
        onClick={() => setVisible((pre) => !pre)}
      />
      <Cascader
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onConfirm={print}
      />
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cascader/demo/value.md>更新此演示代码</a>
        <h3>设置默认值</h3>

```jsx
import React from "react";
import { Cascader, Cell, Button, Toast } from "f6";

export const options = [
  {
    label: "浙江",
    value: "浙江",
    children: [
      {
        label: "杭州",
        value: "杭州",
        children: [
          {
            label: "西湖区",
            value: "西湖区",
          },
          {
            label: "上城区",
            value: "上城区",
          },
        ],
      },
      {
        label: "温州",
        value: "温州",
        children: [
          {
            label: "龙湾区",
            value: "龙湾区",
            disabled: true,
          },
          {
            label: "瓯海区",
            value: "瓯海区",
          },
        ],
      },
      {
        label: "宁波",
        value: "宁波",
        children: [
          {
            label: "海曙区",
            value: "海曙区",
          },
          {
            label: "江北区",
            value: "江北区",
          },
        ],
      },
    ],
  },
  {
    label: "安徽",
    value: "安徽",
    children: [
      {
        label: "合肥",
        value: "合肥",
        children: [
          {
            label: "包河区",
            value: "包河区",
          },
          {
            label: "蜀山区",
            value: "蜀山区",
          },
        ],
      },
      {
        label: "芜湖",
        value: "芜湖",
        children: [
          {
            label: "镜湖区",
            value: "镜湖区",
          },
          {
            label: "弋江区",
            value: "弋江区",
          },
        ],
      },
    ],
  },
  {
    label: "江苏",
    value: "江苏",
    children: [
      {
        label: "南京",
        value: "南京",
        children: [
          {
            label: "玄武区",
            value: "玄武区",
          },
          {
            label: "秦淮区",
            value: "秦淮区",
          },
        ],
      },
      {
        label: "苏州",
        value: "苏州",
        children: [
          {
            label: "虎丘区",
            value: "虎丘区",
          },
          {
            label: "吴中区",
            value: "吴中区",
          },
        ],
      },
    ],
  },
];

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState(['浙江', '杭州', '西湖区']);

  const print = (list) => {
    setValue(list.map((it) => it.value));
    setVisible(false);
  };

  const address = value.map((it) => it).join("-");

  return (
    <>
      <Cell
        title="取件地址"
        value={address}
        link
        onClick={() => setVisible((pre) => !pre)}
      />
      <Cascader
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onConfirm={print}
        defaultValue={['浙江', '杭州', '西湖区']}
      />
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| options | 树形选项 | `CascaderViewOption[]` | `[]` |
| visible | 可见性 | `boolean` | `false` |
| defaultValue | 默认值，value数组，如果不匹配，则无效 | `string[]` | `[]` |
| onConfirm | 确认事件 | `(val: CascaderViewOption[]) => void` | - |
| onClose | 关闭事件 | `() => void` | - |

```tsx
export interface CascaderProps {
  options: CascaderViewOption[];
  visible?: boolean;
  defaultValue?: string[];
  onClose?: () => void;
  onConfirm?: (val: CascaderViewOption[]) => void;
}

export interface CascaderViewOption {
  label: string;
  value: string;
  children?: CascaderViewOption[];
}
```
</div>