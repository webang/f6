import { Cell, Input, Toast } from "f6";

export default function () {
  return (
    <Cell title="相应事件">
      <Input
        placeholder="focus change blur"
        onChange={() => {
          Toast.show({ message: "change", duration: 2000 });
        }}
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
        onBlur={() => {
          Toast.show({ message: "blur", duration: 2000 });
        }}
      />
    </Cell>
  );
}
