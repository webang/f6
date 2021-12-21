---
order: 0
title: 基本用法
---

```jsx
import { useState } from 'react'
import { TabBar } from 'f6';
import Icon from "f6-icons";

const { TabBarItem } = TabBar;

export default function App() {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      badge: 1,
      icon: (active: boolean) =>
        active ? <Icon name="home" /> : <Icon name="home-o" />,
    },
    {
      key: 'message',
      title: '消息通知',
      
      badge: '99+',
      icon: (active: boolean) =>
        active ? <Icon name="megaphone" /> : <Icon name="megaphone-o" />,
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: (active: boolean) =>
        active ? <Icon name="person" /> : <Icon name="person-o" />,
    },
  ]
  const [activeKey, setActiveKey] = useState('message')
  return (
    <TabBar activeKey={activeKey} onChange={setActiveKey}>
      {tabs.map(item => (
        <TabBarItem key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
      ))}
    </TabBar>
  )
}
```
