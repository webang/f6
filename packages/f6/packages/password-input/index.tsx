import { FC, useRef, useState, useEffect } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";
import './index.less';

const [prefix] = defineName('password-input');

export interface PasswordInputProps {
  className?: string;
  count?: number;
}

const PasswordInput: FC<PasswordInputProps> = ({
  className,
  count = 6
}) => {
  const [state, setState] = useState(new Array(count).fill(''));
  const mRef = useRef<HTMLDivElement>(null);
  const mCls = classNames([className, prefix, 'hairline']);
  const [cursorIndex, setCursorIndex] = useState(0);

  const renderItem = (index: number) => {
    return (
      <div className={`${prefix}__item hairline`} onClick={() => handleClick(index)}>
        {cursorIndex === index &&  <span className={`${prefix}__cursor`}></span>}
        {state[index] && <span className={`${prefix}__token`}></span>}
        <input value={state[index]} onChange={(e) => handleChange(index, e.target.value)} className={`${prefix}__input`} maxLength={1} type="text" />
      </div>
    )
  }

  useEffect(() => {
    const handleClick = (e: any) => {
      let p: HTMLElement|null|undefined = e.target;
      while(p?.parentElement) {
        if (p === mRef.current) {
          break;
        }
        p = p?.parentElement;
      }
      console.log(p)
      if (p === document.body || p === document.documentElement) {
        setCursorIndex(-1);
      }
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    if (mRef.current) {
      doFocus(cursorIndex);
    }
  }, [cursorIndex])

  const handleClick = (_: number) => {
    const index = state.findIndex(it => !it);
    if (index === state.length) {
      startTo(_);
    } else {
      startTo(_);
    }
  }

  const doFocus = (index: number) => {
    if (mRef.current) {
      const input = mRef.current.querySelectorAll('input').item(index);
      if (input) {
        input.focus();
      }
    }
  }

  const startTo = (index: number) => {
    console.log(index);
    if (index === -1) return;
    setState((prev) => {
      return prev.map((it, _index) => {
        return _index >= index ? '' : it
      })
    });
    setCursorIndex(index);
    doFocus(index);
  }

  const handleChange = (index: number, val: string) => {
    if (val) {
      setState((prev) => {
        return prev.map((it, _index) => {
          return _index === index ? val : it;
        })
      });
      setCursorIndex(index + 1);
      doFocus(index + 1);
    } else {
      setState((prev) => {
        return prev.map((it, _index) => {
          return _index === index ? val : it
        })
      });
      setCursorIndex(index);
      doFocus(index);
    }
  }

  const list = state.map((_, index) => renderItem(index))

  return (
    <div className={mCls} ref={mRef}>
      <div className={`${prefix}__list`}>
        {list}
      </div>
    </div>
  ) 
}

export default PasswordInput; 