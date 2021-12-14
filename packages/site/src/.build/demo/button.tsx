import App0 from './button/basic';
import App1 from './button/block';
import App2 from './button/disabled';
import App3 from './button/fill';
import App4 from './button/loading';
import App5 from './button/shape';
import App6 from './button/size';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'button';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '禁用状态',
        element: App1
      },{
        title: '填充模式',
        element: App2
      },{
        title: '加载按钮',
        element: App3
      },{
        title: '块级按钮',
        element: App4
      },{
        title: '按钮大小',
        element: App5
      },{
        title: '按钮形状',
        element: App6
      },];
  return <Demo list={list} title={title}/>;
}
