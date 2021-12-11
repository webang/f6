import { defineName } from "../utils/name";
import { FC, ReactNode, useRef, useState, useEffect, CSSProperties } from "react";
import './index.less';

export interface NoticeBarProps {
  text?: ReactNode;
  step?: number;
}

const [prefix] = defineName('notice-bar')

const NoticeBar: FC<NoticeBarProps> = ({
  text,
  step = 1
}) => {
  const [state, setState] = useState({
    offset: -100,
    running: true
  });

  const mRef = useRef<HTMLDivElement>(null);
  const oRef = useRef<HTMLDivElement>(null);

  const stop = () => {
    setState(prev => ({ ...prev, running: !prev.running }))
  }

  useEffect(() => {
    if (!state.running) return;
    if (!mRef.current) return;
    if (!oRef.current) return;

    let id = setTimeout(() => {
      setState(prev => {
        // const oWidth = oRef.current!.offsetWidth;
        const iWidth = mRef.current!.offsetWidth;
        const isFinished = iWidth <= prev.offset;
        const offset = isFinished ? -100 : (prev.offset + step);
        return {
          ...prev,
          offset
        }
      })
    }, 25)
    return () => {
      clearTimeout(id)
    }
  })

  const style: CSSProperties = {
    left: -state.offset
  }

  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`} ref={oRef}>
        <div className={`${prefix}__content`} style={style} ref={mRef}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default NoticeBar;