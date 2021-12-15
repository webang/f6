import App0 from './collapse/basic';
import App1 from './collapse/mutiple';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'collapse';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: 'multiple',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
