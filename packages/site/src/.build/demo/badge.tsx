import App0 from './badge/basic';
import App1 from './badge/dot';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'badge';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '展示小红点',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
