import { Cell, Button } from "f6";

const labelStyle = {
  display: 'inline-block',
  width: '60%'
}

export default function() {
  return (
    <Cell.Group>
      <Cell
        title={"单元格"}
        label={
          <span style={labelStyle}>乱山千叠横江，忆君游倦何方。知否小窗红烛，照人此夜凄凉。</span>
        }
        value={"100"}
        link
      />
    </Cell.Group>
  )
}
