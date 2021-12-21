import Icon from "f6-icons";
import { getScrollTop } from "../utils/dom";
import { FC, forwardRef, ForwardRefRenderFunction, useEffect, useState } from "react";
import { defineName } from "../utils/name";
import './index.less';

const[prefix] = defineName('back-top');

export interface BackTopRef {
  show: () => void;
  close: () => void;
}

export interface BackTopProps {
  distance?: number;
}

const BackTop: ForwardRefRenderFunction<BackTopRef, BackTopProps> = ({
  children,
  distance = 10
}, ref) => {
  const [visible, setVisible] = useState(false);
  const updateVisible = () => {
    setVisible(() => getScrollTop(window) > distance)
  }

  const toTop = () => {
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.addEventListener('scroll', updateVisible)
    return () => {
      window.removeEventListener('scroll', updateVisible)
    }
  }, [])

  if (!visible) return null;

  return (
    <div className={`${prefix}`} onClick={toTop}>
      <div className={`${prefix}__inner`}>
        <Icon name="arrow-up" className={`${prefix}__icon`} />
        {children}
      </div>
    </div>
  )
}

export default forwardRef(BackTop);