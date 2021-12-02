import App0 from './dialog/alert';
import App1 from './dialog/confirm';
import App2 from './dialog/function';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Dialog';
  const list = [{
        title: 'alert',
        element: App0
      },{
        title: 'confirm',
        element: App1
      },{
        title: '函数调用',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
