import React from "react";
import Icon from "f6-icons";
import { Radio, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  const renderIcon = (v) => {
    return v ? <Icon name="success" /> : <Icon name="home" />;
  };
  const mRadio = () => {
    return (
      <Radio icon={renderIcon} onChange={onChange} defaultChecked={v}>
        北京
      </Radio>
    );
  };
  return <Cell title="图标" value={mRadio()}></Cell>;
}
