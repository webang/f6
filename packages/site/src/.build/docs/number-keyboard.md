<div class="block-panel">

<h3>介绍</h3>

`NumberKeyboard` 虚拟数字键盘，比设备键盘更有安全性，样式可扩展。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/number-keyboard/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Toast, NumberKeyboard } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const onInput = (type, val) => {
    if (type === 'close') {
      hide();
      return 
    } else if (type === 'input') {
      Toast.show({ message: `${type}: ` +  val })
    } else {
      Toast.show({ message: `${type}` })
    }
  }

  return (
    <div>
      <Button block color="primary" onClick={show}>点击显示</Button>
      <NumberKeyboard visible={visible} onInput={onInput} />
    </div>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | 可见行 | boolean | `false` |
| onInput | 输入事件 | `(type: NumberKeyboardInputType, value?: number) => void` | - |

```tsx
export interface NumberKeyboardProps {
  visible?: boolean;
  onInput?: (type: string, value?: number) => void;
}

export type NumberKeyboardInputType = 'input' | 'delete' | 'close';
```
</div>