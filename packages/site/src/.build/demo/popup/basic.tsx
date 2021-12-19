import { Popup, Cell } from "f6";
import { useState } from "react";

export default function App() {
  const [v0, setV0] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);

  return (
    <div>
      <Cell
        title="bottom"
        onClick={() => setV0((prev) => !prev)}
        link
      />
      <Cell
        title="top"
        onClick={() => setV1((prev) => !prev)}
        link
      />
      <Cell
        title="left"
        onClick={() => setV2((prev) => !prev)}
        link
      />
      <Cell
        title="right"
        onClick={() => setV3((prev) => !prev)}
        link
      />
      <Cell
        title="middle"
        onClick={() => setV4((prev) => !prev)}
        link
      />

      <Popup visible={v0} onMaskClick={() => setV0(false)}>
        <div style={{ padding: 20 }}>
          日出而作，日入而息。<br />
          凿井而饮，耕田而食。<br />
          帝力于我何有哉！
        </div>
      </Popup>

      <Popup visible={v1} position="top" onMaskClick={() => setV1(false)} >
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>

      <Popup visible={v2} position="left" onMaskClick={() => setV2(false)} >
        <div style={{ padding: 20, width: 140 }}>
          关关雎鸠，在河之洲。<br />
          窈窕淑女，君子好逑。<br />
          参差荇菜，左右流之。<br />
          窈窕淑女，寤寐求之。<br />
        </div>
      </Popup>

      <Popup visible={v3} position="right" onMaskClick={() => setV3(false)} >
       <div style={{ padding: 20, width: 140 }}>
          关关雎鸠，在河之洲。<br />
          窈窕淑女，君子好逑。<br />
          参差荇菜，左右流之。<br />
          窈窕淑女，寤寐求之。<br />
        </div>
      </Popup>

      <Popup visible={v4} position="middle" onMaskClick={() => setV4(false)}>
        <div style={{ padding: 20 }}>
          日出而作，日入而息。<br />
          凿井而饮，耕田而食。<br />
        </div>
      </Popup>
    </div>
  );
}
