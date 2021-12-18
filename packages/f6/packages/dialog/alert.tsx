import { DialogProps } from ".";
import { show } from "./show";

export type AlertDialogProps = Omit<
  DialogProps,
  "visible" | "showCancelButton" | "showConfirmButton" | "onCancel" | "cancelText"
>;

export function alert(props: AlertDialogProps) {
  return new Promise<"ok" | "cancel" | any>((resolve, _) => {
    return show({
      ...props,
      showCancelButton: false,
      showConfirmButton: true,
      appear: true,
      onOk: async () => {
        const result = (await props.onOk?.()) || "ok";
        resolve(result);
      },
    });
  });
}