import App0 from './field/basic';
import App1 from './field/event';
import App2 from './field/password';
import App3 from './field/rules';
import App4 from './field/textarea';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'field';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '输入校验',
        element: App1
      },{
        title: '长文本输入',
        element: App2
      },{
        title: '响应事件',
        element: App3
      },{
        title: '输入密码',
        element: App4
      },];
  return <Demo list={list} title={title}/>;
}
