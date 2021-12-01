import App0 from './grid/basic';
import App1 from './grid/multi';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Grid';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '多行展示',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
