<div class="block-panel">

<h3>介绍</h3>

底部导航栏，用于在不同页面之间进行切换。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/tab-bar/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
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
      <TabBar activeKey={activeKey} onChange={setActiveKey}>
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
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/tab-bar/demo/defaultActiveKey.md>更新此演示代码</a>
        <h3>默认值</h3>

```jsx
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
```
</div>
<div class="block-panel">

<h3>TabBarProps API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| activeKey | 当前激活项 | `string` | - |
| defaultActiveKey | 默认激活项 | `string` | - |
| onChange | 激活项改变事件 | `(key: string) => void` | - |

```ts
export interface TabBarProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  style?: CSSProperties;
}
```


</div>
<div class="block-panel">

<h3>TabBarItemProps API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| icon | 图标 | `React.ReactNode` \| `(active: boolean) => React.ReactNode` | - |
| title | 标题 | `React.ReactNode` | - |
| key | 标识 | `string` | - |
| badge | 徽章 | `string` \|  `number` \| `symbol` | - |

```tsx
export type TabBarItemProps = {
  icon?: React.ReactNode | ((active: boolean) => React.ReactNode);
  title?: string;
  key?: string;
  badge?: string | number | symbol;
  className?: string;
  style?: CSSProperties;
};
```
</div>