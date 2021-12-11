<div class="block-panel">
      <script>var code =`import { Cell, Button, ActionSheet, Toast } from 'f6';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const mShow = () => setShow(true);
  const hide = () => setShow(false);
  const callback = (index: number) => {
    Toast.show({ message: index })
    setShow(false)
  }

  return (
    <div>
      <Cell title="标题" value={<Button size="mini" type="primary" onClick={mShow}>显示</Button>} />
      <ActionSheet onClose={hide} callback={callback} visible={show} actions={[{ name: '相机' }, { name: '相册' }]}></ActionSheet>
    </div>
  )
}
`; console.log(code)</script>
      <h3>基本用法</h3>

```jsx
import { Cell, Button, ActionSheet, Toast } from 'f6';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const mShow = () => setShow(true);
  const hide = () => setShow(false);
  const callback = (index: number) => {
    Toast.show({ message: index })
    setShow(false)
  }

  return (
    <div>
      <Cell title="标题" value={<Button size="mini" type="primary" onClick={mShow}>显示</Button>} />
      <ActionSheet onClose={hide} callback={callback} visible={show} actions={[{ name: '相机' }, { name: '相册' }]}></ActionSheet>
    </div>
  )
}
```
</div>

<div class="block-panel">
      <script>var code =`import { Cell, Button, ActionSheet, Toast } from 'f6';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const mShow = () => setShow(true);
  const hide = () => setShow(false);
  const callback = (index: number) => {
    Toast.show({ message: index })
    setShow(false)
  }

  return (
    <div>
      <Cell title="标题" value={<Button size="mini" type="primary" onClick={mShow}>显示</Button>} />
      <ActionSheet title="标题" onClose={hide} callback={callback} visible={show} actions={[{ name: '相机' }, { name: '相册' }]}></ActionSheet>
    </div>
  )
}
`; console.log(code)</script>
      <h3>设置标题</h3>

```jsx
import { Cell, Button, ActionSheet, Toast } from 'f6';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const mShow = () => setShow(true);
  const hide = () => setShow(false);
  const callback = (index: number) => {
    Toast.show({ message: index })
    setShow(false)
  }

  return (
    <div>
      <Cell title="标题" value={<Button size="mini" type="primary" onClick={mShow}>显示</Button>} />
      <ActionSheet title="标题" onClose={hide} callback={callback} visible={show} actions={[{ name: '相机' }, { name: '相册' }]}></ActionSheet>
    </div>
  )
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | ```(() => HTMLElement) | Window``` | `window` |
| wrapperStyle | 固钉 style | `(params: { fixed: boolean }) => React.CSSProperties` | - |