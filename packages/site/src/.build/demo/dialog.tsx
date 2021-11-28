import App0 from './dialog/basic';
import App1 from './dialog/function';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Dialog';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '函数调用',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
