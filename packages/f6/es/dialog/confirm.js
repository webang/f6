import _extends from "@babel/runtime/helpers/esm/extends";
import { show } from "./show";
export function confirm(props) {
  return new Promise(function (resolve, _) {
    return show(_extends({}, props, {
      showCancelButton: true,
      showConfirmButton: true,
      appear: true,
      onCancel: function onCancel() {
        resolve((props.onCancel == null ? void 0 : props.onCancel()) || 'cancel');
      },
      onOk: function onOk() {
        resolve((props.onOk == null ? void 0 : props.onOk()) || 'ok');
      }
    }));
  });
}