import App0 from './field/basic';
import App1 from './field/disabled';
import App2 from './field/event';
import App3 from './field/password';
import App4 from './field/readOnly';
import App5 from './field/rules';
import App6 from './field/titlePosition';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'field';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '禁止输入',
        element: App1
      },{
        title: '响应事件',
        element: App2
      },{
        title: '只读状态',
        element: App3
      },{
        title: '输入校验',
        element: App4
      },{
        title: '输入密码',
        element: App5
      },{
        title: '上下布局',
        element: App6
      },];
  return <Demo list={list} title={title}/>;
}
