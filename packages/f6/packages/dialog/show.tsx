import {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { mountTo } from "../utils/mountTo";
import Dialog, { DialogProps } from ".";

export type DialogShowProps = Omit<DialogProps, "visible">;
export type DialogShowRef = {
  close: () => void;
  forceClose: () => void;
};

export function show(props: DialogShowProps) {
  const instanceRef = createRef<DialogShowRef>();

  const context = {
    unmount: () => {},
    close: () => {
      instanceRef.current?.close();
    },
    forceClose: () => {
      instanceRef.current?.forceClose();
    }
  };

  const Wrapper = forwardRef<DialogShowRef>((_, ref) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => setVisible(true), []);

    function closeHandler() {
      if (props.onClose) {
        setVisible(!Boolean(props.onClose()));;
      } else {
        setVisible(false)
      }
    }

    function forceClose() {
      setVisible(false)
    }

    useImperativeHandle(ref, () => ({
      close: closeHandler,
      forceClose
    }));

    return (
      <Dialog
        {...props}
        onClose={closeHandler}
        visible={visible}
        onClosed={() => {
          context.unmount();
          props.onClosed?.();
        }}
      />
    );
  });

  context.unmount = mountTo(<Wrapper ref={instanceRef} />);

  return {
    close: context.close,
    forceClose: context.forceClose
  };
}
