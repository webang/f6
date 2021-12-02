import { Cell, Button } from "f6";

const button = (<Button size="mini" type="primary">详情</Button>);

export default function() {
  return (
    <Cell.Group>
      <Cell title={"单元格"} value={"100"} link />
      <Cell
        title={"单元格"}
        value={button}
        link
      />
      <Cell title={"单元格"} label={"描述信息"} value={"100"} link />
    </Cell.Group>
  )
};
