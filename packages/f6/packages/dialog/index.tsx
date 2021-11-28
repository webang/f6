import ReactDOM from "react-dom";
import OriginDialog, { DialogProps } from './dialog';
import "./index.less";

export type DialogType = 'alert' | 'confirm';
export type { DialogProps };

const Dialog = OriginDialog as (typeof OriginDialog) & {
  alert: (params: DialogProps) => void;
  confirm: (params: DialogProps) => void;
}

function createDialog(props: DialogProps, type: DialogType) {
  const container = document.createElement('div');
  const mountNode = document.body;
  const afterClose = () => {
    mountNode.removeChild(container);
  }
  const element = (
    <OriginDialog
      {...props}
      visible={true}
      afterClose={afterClose}
    />
  );
  mountNode.appendChild(container);
  ReactDOM.render(element, container);
}

Dialog.confirm = function (params: DialogProps) {
  createDialog({
    ...params,
    showCancelButton: true,
    showConfirmButton: true,
    appear: true,
  }, 'confirm');
};

Dialog.alert = function (params: DialogProps) {
  createDialog({
    ...params,
    showCancelButton: false,
    showConfirmButton: true,
    appear: true
  }, 'alert');
};

export default Dialog;