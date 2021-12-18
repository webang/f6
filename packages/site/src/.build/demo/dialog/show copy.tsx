import React from "react";
import { Dialog, Space, Button, Toast } from "f6";

export default function App() {
  return (
    <Space direction="vertical">
      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "元气",
            content: "窈窕淑女，君子说好逑",
          });
          Toast.show({ message: res });
        }}
      >
        默认返回
      </Button>

      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => "😁",
          });
          Toast.show({ message: res });
        }}
      >
        自定义返回值
      </Button>

      <Button
        block
        onClick={async () => {
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => {
              return new Promise((resolve) => {
                setTimeout(() => resolve("😁"), 200);
              });
            },
          });
          Toast.show({ message: res });
        }}
      >
        异步回调
      </Button>

      <Button
        block
        onClick={async () => {
          let count = 0;
          const res = await Dialog.alert({
            title: "木兰花·拟古决绝词柬友",
            content: "人生若只如初见，何事秋风悲画扇。",
            onOk: () => {
              return "😁";
            },
            onClose: () => {
              count++;
              return count > 2;
            },
          });
          Toast.show({ message: res });
        }}
      >
        控制是否关闭
      </Button>
    </Space>
  );
}
