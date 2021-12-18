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

  return (
    <div>
      <Button block onClick={show}>
        设置标题
      </Button>
      <ActionSheet
        title="选择图片"
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ title: "相机" }, { title: "相册" }]}
      />
    </div>
  );
}
