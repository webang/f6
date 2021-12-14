import React from 'react';
import { Button, Overlay } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <div>
      <Button color="primary" onClick={show}>点击显示</Button>
      <Overlay onClick={hide} visible={visible} />
    </div>
  )
}
