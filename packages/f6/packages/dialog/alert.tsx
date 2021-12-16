import { DialogProps } from ".";
import { show } from "./show";

export type AlertDialogProps = Omit<DialogProps, "visible">;

export function alert(props: AlertDialogProps) {
  return new Promise<'ok'|'cancel'|any>((resolve, _) => {
    return show({
      ...props,
      showCancelButton: false,
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
