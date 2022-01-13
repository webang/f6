import { useState } from "react";
import { TabBar, Button, Space } from "f6";
import Icon from "f6-icons";

export default function App() {
  const tabs = [
    {
      key: "home",
      title: "首页",
      badge: 1,
      icon: (active: boolean) =>
        active ? <Icon name="home" /> : <Icon name="home-o" />,
    },
    {
      key: "message",
      title: "消息",
      badge: "99+",
      icon: (active: boolean) =>
        active ? <Icon name="megaphone" /> : <Icon name="megaphone-o" />,
    },
    {
      key: "account",
      title: "我的",
      icon: (active: boolean) =>
        active ? <Icon name="person" /> : <Icon name="person-o" />,
    },
  ];

  const [activeKey, setActiveKey] = useState("message");

  return (
    <>
      <TabBar defaultActiveKey="message" onChange={setActiveKey}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
      <Space direction="vertical">
        <div />
        <Button block onClick={() => setActiveKey("account")}>{activeKey}</Button>
      </Space>
    </>
  );
}
