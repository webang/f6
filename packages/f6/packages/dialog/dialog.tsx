import React, { ReactNode, FC, useEffect } from "react";
import classNames from "classnames";
import Overlay from "../overlay";
import Button from "../button";
import { defineName } from "../utils/name";
import "./index.less";
import Transition from "../transition";

export interface DialogProps {
  visible?: boolean;
  title?: React.ReactNode;
  message?: React.ReactNode;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  animationDuration?: number;
  okText?: ReactNode;
  cancelText?: ReactNode;
  appear: boolean; // 首次挂载动画
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
}

const [prefix] = defineName("dialog");

const Dialog: FC<DialogProps> = ({
  title,
  message,
  visible,
  showCancelButton = true,
  showConfirmButton = true,
  animationDuration = 250,
  okText = "确认",
  cancelText = "取消",
  appear = false,
  onOk = () => false,
  onCancel = () => false,
  onClose,
  onClosed,
}) => {
  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (!visible) {
      id = setTimeout(() => onClosed?.(), animationDuration);
    }
    return () => {
      if (id !== null) clearTimeout(id);
    };
  }, [visible]);

  const okHandler = () => {
    onClose?.();
    onOk();
  };

  const cancelHandler = () => {
    onClose?.();
    onCancel();
  };

  return (
    <>
      <Overlay visible={visible} timeout={animationDuration + 100} />
      <Transition
        type="f6-scale-fade"
        appear={appear}
        in={visible}
        timeout={animationDuration}
      >
        <div
          className={prefix}
          style={{ transitionDuration: `${animationDuration}ms` }}
        >
          {title && <div className={prefix + "__header"}>{title}</div>}
          <div className={prefix + "__content"}>{message}</div>
          <div className={classNames([prefix + "__footer", "hairline"])}>
            {showCancelButton && (
              <Button onClick={cancelHandler}>{cancelText}</Button>
            )}
            {showConfirmButton && <Button onClick={okHandler}>{okText}</Button>}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Dialog;
