<div class="block-panel">
<h3>基本用法</h3>

```jsx
import React from "react";
import { Checkbox, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  return (
    <Cell.Group>
      <Cell
        title="格子"
        value={
          <Checkbox onChange={onChange} checked={v}>
            北京
          </Checkbox>
        }
      />
      <Cell title="格子" value={<Checkbox>深圳</Checkbox>} />
    </Cell.Group>
  );
}
```
</div>

<div class="block-panel">
<h3>禁用状态</h3>

```jsx
import React from "react";
import { Checkbox, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  return (
    <Cell.Group>
      <Cell
        title="格子"
        value={
          <Checkbox onChange={onChange} checked={v}>
            北京
          </Checkbox>
        }
      />
      <Cell title="格子" value={<Checkbox disabled>深圳</Checkbox>} />
    </Cell.Group>
  );
}
```
</div>

<div class="block-panel">
<h3>复选框组</h3>

```jsx
import React from "react";
import { Checkbox, Space, Cell, Toast } from "f6";

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v.join(",") });
  };
  return (
    <Checkbox.Group defaultValue="1" onChange={onChange}>
      <Space>
        <Checkbox value={"1"}>北京</Checkbox>
        <Checkbox value={"2"}>深圳</Checkbox>
      </Space>
    </Checkbox.Group>
  );
}
```
</div>

<div class="block-panel">
<h3>自定义图标</h3>

```jsx
import React from "react";
import Icon from "f6-icons";
import { Checkbox, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });

  const renderIcon = (v) => {
    return v ? <Icon name="checkbox" /> : <Icon name="radio-on" />;
  };

  const radio = (
    <Checkbox icon={renderIcon} onChange={onChange} checked={v}>
      北京
    </Checkbox>
  );

  return (
    <Cell.Group>
      <Cell title="格子" value={radio}></Cell>
    </Cell.Group>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultChecked | 默认选中 | boolean | `false` |
| disabled | 禁用状态 | boolean ｜ `false` |
| onChange | 更新事件 | `(checked: boolean) => void` | - |
| icon | 图标 | `ReactNode | ((checked: boolean) => ReactNode)` | 内置 |
| value | 代表的值，配置 group 使用 | `CheckboxValue` | - |

```tsx
export type CheckboxValue = string|number;

export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  icon: ReactNode | ((checked: boolean) => ReactNode);
  value?: CheckboxValue;
}
```


</div>
<div class="block-panel">

<h3>CheckboxGroupProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultValue | 默认选中项 | `[]CheckboxValue` | `[]` |
| onChange | 更新事件 | `(val: CheckboxValue[]) => void` | - |

```tsx
export interface CheckboxGroupProps {
  defaultValue?: CheckboxValue[];
  onChange?: (val: CheckboxValue[]) => void;
}
```
</div>