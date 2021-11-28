import App0 from './message/basic';
import App1 from './message/icon';
import App2 from './message/link';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Message';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '基本用法',
        element: App1
      },{
        title: '自定义ICON',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
