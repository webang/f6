import App0 from './check-list/basic';
import App1 from './check-list/multiple';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'check-list';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置多选',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
