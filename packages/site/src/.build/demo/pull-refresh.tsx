import App0 from './pull-refresh/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'PullRefresh';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
