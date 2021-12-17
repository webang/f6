<div class="block-panel">

<h3>介绍</h3>

ActionSheet 用于从底部弹起一个可操作清单。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/action-sheet/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Cell, Button, ActionSheet, Toast } from "f6";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const callback = (index: number) => {
    Toast.show({ message: index });
    hide();
  };

  const mButton = (
    <Button size="mini" color="primary" onClick={show}>
      显示
    </Button>
  );

  return (
    <div>
      <Cell title="标题" value={mButton} />
      <ActionSheet
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ name: "相机" }, { name: "相册" }]}
      />
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/action-sheet/demo/title.md>更新此演示代码</a>
        <h3>设置标题</h3>

```jsx
import { Cell, Button, ActionSheet, Toast } from "f6";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const callback = (index: number) => {
    Toast.show({ message: index });
    hide();
  };

  const mButton = (
    <Button size="mini" color="primary" onClick={show}>
      显示
    </Button>
  );

  return (
    <div>
      <Cell title="标题" value={mButton} />
      <ActionSheet
        title="选择图片"
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ name: "相机" }, { name: "相册" }]}
      />
    </div>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

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
</div>