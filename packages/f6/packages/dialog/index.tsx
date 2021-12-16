import { show } from './show';
import { alert } from "./alert";
import { confirm } from "./confirm";

import OriginDialog, { DialogProps } from './dialog';
import "./index.less";

export type DialogType = 'alert' | 'confirm';
export type { DialogProps };

const Dialog = OriginDialog as (typeof OriginDialog) & {
  show: typeof show;
  alert: typeof alert;
  confirm: typeof confirm;
}

Dialog.show = show;
Dialog.alert = alert;
Dialog.confirm = confirm;

export default Dialog;