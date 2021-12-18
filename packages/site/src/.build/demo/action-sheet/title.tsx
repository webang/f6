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
        设置描述
      </Button>
      <ActionSheet
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ title: "相机", desc: "请先配置权限" }, { title: "相册" }]}
      />
    </div>
  );
}
