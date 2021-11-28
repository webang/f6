import { Cell, Button, Toast } from "f6/packages";

export default function App() {
  return (
    <Cell.Group>
      <Cell
        title={"更新内容"}
        link
        onClick={() => {
          const ref = Toast.show({
            position: "top",
            message: "请求成功",
            duration: 1000,
          });
          setTimeout(() => {
            ref.setContent("我不是我了");
          }, 500);
        }}
      />
    </Cell.Group>
  );
}
