import { Grid } from 'f6/packages';
const icon = <img width={20} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <>
      <Grid columnNum={3}>
        <Grid.Item icon={icon} text="业务"></Grid.Item>
        <Grid.Item icon={icon} text="财务"></Grid.Item>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
      </Grid>
    </>
  )
}
