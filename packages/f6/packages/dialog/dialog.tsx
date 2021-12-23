import React, { ReactNode, FC, useEffect, useRef } from "react";
import classNames from "classnames";
import Overlay from "../overlay";
import Button from "../button";
import { defineName } from "../utils/name";
import "./index.less";
import Transition from "../transition";

export interface DialogProps {
  visible?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  animationDuration?: number;
  okText?: ReactNode;
  cancelText?: ReactNode;
  appear: boolean; // 首次挂载动画
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => (void|boolean);
  onClosed?: () => void;
}

const [prefix] = defineName("dialog");

const Dialog: FC<DialogProps> = ({
  title,
  content,
  visible,
  showCancelButton = true,
  showConfirmButton = true,
  animationDuration = 250,
  okText = "ok",
  cancelText = "cancel",
  appear = false,
  onOk = () => false,
  onCancel = () => false,
  onClose = () => true,
  onClosed,
}) => {
  const initRef = useRef({ state: false });

  useEffect(() => {
    if (initRef.current.state === false) {
      initRef.current.state = true;
      return;
    }
    let id: NodeJS.Timeout | null = null;
    if (!visible) {
      id = setTimeout(() => {
        onClosed?.()
      }, animationDuration);
    }
    return () => {
      if (id !== null) clearTimeout(id);
    };
  }, [visible]);

  const okHandler = async () => {
    await onOk();
    onClose?.();
  };

  const cancelHandler = async () => {
    await onCancel();
    onClose?.();
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
          <div className={prefix + "__content"}>{content}</div>
          <div className={classNames([prefix + "__footer", "hairline"])}>
            {showCancelButton && (
              <Button className={"hairline"} onClick={cancelHandler}>{cancelText}</Button>
            )}
            {showConfirmButton && <Button className={"hairline"} onClick={okHandler}>{okText}</Button>}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Dialog;
