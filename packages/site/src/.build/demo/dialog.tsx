import App0 from './dialog/alert';
import App1 from './dialog/alfterFunction';
import App2 from './dialog/confirm';
import App3 from './dialog/confirmFunction';
import App4 from './dialog/showFunction';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'dialog';
  const list = [{
        title: 'alert 样式',
        element: App0
      },{
        title: 'confirm',
        element: App1
      },{
        title: 'alert 函数调用',
        element: App2
      },{
        title: 'confirm 函数调用',
        element: App3
      },{
        title: 'show 函数调用',
        element: App4
      },];
  return <Demo list={list} title={title}/>;
}
