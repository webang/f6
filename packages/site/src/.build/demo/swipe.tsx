import App0 from './swipe/basic';
import App1 from './swipe/direction';
import App2 from './swipe/effect';
import App3 from './swipe/loop';
import App4 from './swipe/spaceBetween';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'swipe';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: 'loop',
        element: App1
      },{
        title: 'spaceBetween',
        element: App2
      },{
        title: 'direction',
        element: App3
      },{
        title: '变换效果',
        element: App4
      },];
  return <Demo list={list} title={title}/>;
}
