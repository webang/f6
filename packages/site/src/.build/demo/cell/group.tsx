import { Cell, Button } from "f6/packages";

const button = (<Button size="mini" type="primary">详情</Button>);
const label = <span>乱山千叠横江，忆君游倦何方。知否小窗红烛，照人此夜凄凉。</span>;
const icon = <img width={24} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" /> 

export default function() {
  return (
    <Cell.Group>
      <Cell icon={icon} title={"单元格"} value={"100"} link />
      <Cell
        title={"单元格"}
        icon={icon}
        value={button}
        label={label}
        link
      />
    </Cell.Group>
  )
}
