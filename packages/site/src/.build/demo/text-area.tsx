import App0 from './text-area/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'text-area';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
