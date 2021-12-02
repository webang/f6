import React, { ReactNode, useImperativeHandle, ForwardRefRenderFunction, useState, useEffect, forwardRef } from "react";
import Overlay from "../overlay";
import "./index.less";
import Button from "../button";
import Transition from "../transition";
import { defineName } from "../utils/name";
import classNames from "classnames";

export interface DialogProps {
  visible?: boolean;
  title?: string;
  message?: string | React.ReactElement;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  animationDuration?: number;
  okText?: ReactNode;
  cancelText?: ReactNode;
  appear: boolean; // 首次挂载动画
  onOk?: () => boolean|Promise<boolean>;
  onCancel?: () => boolean|Promise<boolean>;
  afterClose?: () => void;
}

export interface DialogRef {
  show: () => void,
  close: () => void
}

const [prefix] = defineName("dialog");

const _Dialog: ForwardRefRenderFunction<DialogRef, DialogProps> = ({
  title,
  message,
  visible: _visible,
  showCancelButton = true,
  showConfirmButton = true,
  animationDuration = 250,
  okText = "确认",
  cancelText = "取消",
  appear = false,
  onOk,
  onCancel,
  afterClose,
}, ref) => {
  const [visible, setVisible] = useState(_visible);

  useEffect(() => {
    if (!visible) {
      // 这个写法不够优雅
      const fn = () => afterClose && afterClose();
      setTimeout(fn, animationDuration)
    }
  }, [visible]);

  useEffect(() => {
    setVisible(_visible);
  }, [_visible]);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    close: () => setVisible(false),
  }));

  const handleClickOk = () => {
    if (onOk) {
      const res = onOk();
      if (res instanceof Promise) {
        res.then().then(res => {
          setVisible(res);
        })
      } else {
        setVisible(res);
      }
    } else {
      setVisible(false);
    }
  }

  const handleClickCancel = () => {
    if (onCancel) {
      const res = onCancel();
      if (res instanceof Promise) {
        res.then().then(res => {
          setVisible(res);
        })
      } else {
        setVisible(res);
      }
    } else {
      setVisible(false);
    }
  }

  return (
    <>
      <Overlay visible={visible} timeout={animationDuration + 100} />
      <Transition type="f6-scale-fade" appear={appear} in={visible} timeout={animationDuration}>
        <div
          className={prefix}
          style={{ transitionDuration: `${animationDuration}ms` }}
        >
          {title && <div className={prefix + "__header"}>{title}</div>}
          <div className={prefix + "__content"}>{message}</div>
          <div className={classNames([prefix + "__footer", 'hairline'])}>
            {showCancelButton && (
              <Button onClick={handleClickCancel}>
                {cancelText}
              </Button>
            )}
            {showConfirmButton && (
              <Button onClick={handleClickOk}>{okText}</Button>
            )}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default forwardRef(_Dialog);