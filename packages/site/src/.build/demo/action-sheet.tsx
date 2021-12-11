import App0 from './action-sheet/basic';
import App1 from './action-sheet/title';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Affix';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置标题',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
