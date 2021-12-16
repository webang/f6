import { DialogProps } from ".";
import { show } from "./show";

export type AlertDialogProps = Omit<DialogProps, "visible">;

export function confirm(props: AlertDialogProps) {
  return new Promise((resolve, _) => {
    return show({
      ...props,
      showCancelButton: true,
      showConfirmButton: true,
      appear: true,
      onCancel: () => {
        resolve(props.onCancel?.() || 'cancel');
      },
      onOk: () => {
        resolve(props.onOk?.() || 'ok');
      }
    })
  });
}