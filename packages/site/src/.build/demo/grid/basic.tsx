import { Grid } from 'f6';
const icon = <img width={16} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <Grid>
      <Grid.Item icon={icon} text="业务"></Grid.Item>
      <Grid.Item icon={icon} text="财务"></Grid.Item>
    </Grid>
  )
}
