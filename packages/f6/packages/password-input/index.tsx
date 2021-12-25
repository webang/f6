import React, { FC, useRef, useState, useEffect } from "react";
import { defineName } from "../utils/name";
import classNames from "classnames";
import "./index.less";

const [prefix] = defineName("password-input");

export interface PasswordInputProps {
  className?: string;
  count?: number;
  onChange?: (val: string[]) => void;
}

const PasswordInput: FC<PasswordInputProps> = ({
  className,
  onChange,
  count = 6,
}) => {
  const [state, setValue] = useState(new Array(count).fill(""));
  const [focus, setFocus] = useState(true);
  const [cursorIndex, setIndex] = useState(0);

  const mRef = useRef<HTMLDivElement>(null);
  const mCls = classNames([
    className,
    prefix,
    "hairline",
  ]);

  const setCursorIndex = (index: number) => {
    if (index > state.length - 1 || index < -1) {
      setIndex(-1);
    } else {
      setIndex(index);
    }
  };

  const setState = (val: ((val: string[]) => string[]) | string[]) => {
    if (Array.isArray(val)) {
      setValue(val);
      onChange?.(val);
    }
    if (typeof val === "function") {
      setValue((prev) => {
        onChange?.(val(prev));
        return val(prev);
      });
    }
  };

  const renderItem = (index: number) => {
    return (
      <div
        className={`${prefix}__item hairline`}
        onClick={() => handleClick(index)}
      >
        {cursorIndex === index && <span className={`${prefix}__cursor`}></span>}
        {state[index] && <span className={`${prefix}__token`}></span>}
        <input
          type="number"
          value={state[index]}
          onChange={(e) => handleChange(index, e)}
          className={`${prefix}__input`}
          maxLength={1}
        />
      </div>
    );
  };

  useEffect(() => {
    doFocus(0);
  }, []);

  useEffect(() => {
    // 处理是否失焦
    const handleClick = (e: any) => {
      let p: HTMLElement | null | undefined = e.target;
      while (p) {
        if (p === mRef.current) {
          setFocus(true);
          break;
        }
        p = p?.parentElement;
      }
      if (!p || p === document.body || p === document.documentElement) {
        setCursorIndex(-1);
        setFocus(false);
      }
    };

    // 处理 delete
    const callBack = (e: any) => {
      if (e.keyCode === 8) {
        if (!focus || cursorIndex === 0) return;
        let index = cursorIndex;
        if (cursorIndex === -1) {
          index = state.length - 1;
        } else {
          index = index - 1;
        }
        setState((prev) => {
          return prev.map((it, i) => (i < index ? it : ""));
        });
        setCursorIndex(index);
        doFocus(index);
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("keyup", callBack);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keyup", callBack);
    };
  }, [setCursorIndex, cursorIndex, focus]);

  const handleClick = (cur: number) => {
    const index = getFirstIndex();
    if (index === -1) {
      startTo(cur);
    } else {
      if (cur <= index) {
        startTo(cur);
      } else {
        startTo(index);
      }
    }
  };

  const getInput = (index: number) => {
    return mRef.current
      ? mRef.current.querySelectorAll("input").item(index)
      : null;
  };

  const doFocus = (index: number) => {
    if (mRef.current) {
      const input = getInput(index);
      input?.focus();
    }
  };

  const startTo = (index: number) => {
    if (index === -1) return;
    setState((prev) => {
      return prev.map((it, _index) => {
        return _index >= index ? "" : it;
      });
    });
    setCursorIndex(index);
    doFocus(index);
  };

  // 获取第一个没有值的输入框索引
  const getFirstIndex = () => {
    return state.findIndex((it) => !it);
  };

  const handleChange = (index: number, e: any) => {
    const val = e.target.value.slice(0, 1);
    if (val) {
      setState((prev) => {
        return prev.map((it, _index) => {
          return _index === index ? val : it;
        });
      });

      setCursorIndex(index + 1);
      doFocus(index + 1);
    } else {
      setState((prev) => {
        return prev.map((it, _index) => {
          return _index === index ? val : it;
        });
      });
    }
  };

  const list = state.map((_, index) => renderItem(index));

  return (
    <div className={mCls} ref={mRef}>
      <div className={`${prefix}__list`}>{list}</div>
    </div>
  );
};

export default PasswordInput;