import App0 from './flow/basic';
import App1 from './flow/direction';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Flow';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '排列方向',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
