import App0 from './flow/basic';
import App1 from './flow/direction';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'flow';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '基本用法',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
