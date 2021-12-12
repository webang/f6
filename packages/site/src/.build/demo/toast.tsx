import App0 from './toast/basic';
import App1 from './toast/clear';
import App2 from './toast/content';
import App3 from './toast/duration';
import App4 from './toast/position';
import App5 from './toast/spinner';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'toast';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '加载动画',
        element: App1
      },{
        title: '清除所有',
        element: App2
      },{
        title: '持续时长',
        element: App3
      },{
        title: '提示位置',
        element: App4
      },{
        title: '内容更新',
        element: App5
      },];
  return <Demo list={list} title={title}/>;
}
