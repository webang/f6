<div class="block-panel"><h3>基本用法</h3>

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
      <Button color="primary" onClick={show}>点击显示</Button>
      <NumberKeyboard visible={visible} onInput={onInput} />
    </div>
  )
}
```
</div>

### Props

thi is Props content

### API

this is API content