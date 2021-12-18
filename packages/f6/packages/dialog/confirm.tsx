import { DialogProps } from ".";
import { show } from "./show";

export type ConfirmDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton"
>;

export function confirm(props: ConfirmDialogProps) {
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