import App0 from './dropdown-menu/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'dropdown-menu';
  const list = [{
        title: '普通用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
