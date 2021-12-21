import { Space, Switch } from 'f6';

export default function App() {
  return (
    <Space direction="vertical">
      <Switch></Switch>
      <Switch defaultValue={true}></Switch>
      <Switch disabled></Switch>
      <Switch disabled defaultValue={true}></Switch>
    </Space>
  )
}
