import { Grid } from 'f6/packages';

export default function App() {
  return (
    <>
      <Grid>
        <Grid.Item icon="1" text="业务"></Grid.Item>
        <Grid.Item icon="2" text="财务"></Grid.Item>
        <span>hello</span>
      </Grid>
      <div style={{ height: 20 }}></div>
      <Grid>
        <Grid.Item icon="1" text="商品"></Grid.Item>
        <Grid.Item icon="2" text="订单"></Grid.Item>
        <Grid.Item icon="2" text="物流">主要按钮</Grid.Item>
        <span>hello</span>
      </Grid>
    </>
  )
}
