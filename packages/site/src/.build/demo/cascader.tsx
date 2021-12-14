import App0 from './cascader/basic';
import App1 from './cascader/value';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'cascader';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置默认值',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
