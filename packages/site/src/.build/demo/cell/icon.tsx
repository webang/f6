import { Cell, Button } from "f6/packages";
export default function() {
  return (
    <>
      <Cell title={"有边框"} value={"100"} link />
      <Cell
        title={"无边框"}
        value={"100"}
        link
      />
      <div style={{ height: 10 }}></div> 
      <Cell.Group>
        <Cell title={"有边框"} value={"100"} link />
        <Cell
          title={"无边框"}
          value={"100"}
          link
        />
      </Cell.Group>
    </>
  )
}
