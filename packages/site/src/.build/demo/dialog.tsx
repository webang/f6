import App0 from './dialog/alert';
import App1 from './dialog/basic';
import App2 from './dialog/confirm';
import App3 from './dialog/content';
import App4 from './dialog/show';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'dialog';
  const list = [{
        title: '基本使用',
        element: App0
      },{
        title: 'Dialog.show',
        element: App1
      },{
        title: 'Dialog.alert',
        element: App2
      },{
        title: 'confirm 函数调用',
        element: App3
      },{
        title: '自定义content',
        element: App4
      },];
  return <Demo list={list} title={title}/>;
}
