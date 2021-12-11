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
