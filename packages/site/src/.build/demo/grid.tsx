import App0 from './grid/basic';
import App1 from './grid/border';
import App2 from './grid/multi';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'grid';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '边框配置',
        element: App1
      },{
        title: '列数配置',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
