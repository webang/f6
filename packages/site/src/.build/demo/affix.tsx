import App0 from './affix/basic';
import App1 from './affix/container';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Affix';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置容器',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
