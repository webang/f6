import App0 from './tab-bar/basic';
import App1 from './tab-bar/defaultActiveKey';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'tab-bar';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '默认值',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
