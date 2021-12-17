<div class="block-panel">
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
      <Button color="primary" onClick={show}>点击显示</Button>
      <NumberKeyboard visible={visible} onInput={onInput} />
    </div>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

thi is Props content


</div>
<div class="block-panel">

<h3>API</h3>

this is API content
</div>