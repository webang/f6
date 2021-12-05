import { defineName } from "../utils/name";
import { FC } from "react";
import "./index.less";
import IconKeyboard from "./icon-keyboard";
import IconDelete from "./icon-delete";

const [prefx] = defineName("number-keyboard");

export type NumberKeyboardType = ''

export interface NumberKeyboardProps {
  visible?: boolean;
  onInput?: (type: string, value?: number) => void;
}

const NumberKeyboard: FC<NumberKeyboardProps> = ({ visible, onInput }) => {
  const renderItem = (i: number, onClick?: Function) => {
    return (
      <div className={`${prefx}__unit`}>
        <div className={`${prefx}__box`} onClick={() => onClick?.()}>
          {i}
        </div>
      </div>
    );
  };

  const renderNums = () => {
    let list = new Array(9).fill(0);
    list = list.map((_, i) =>
      renderItem(i + 1, () => {
        onInput?.("input", i + 1);
      })
    );
    return list;
  };

  if (!visible) return null;

  return (
    <div className={`${prefx}`}>
      <div className={`${prefx}__units`}>
        {renderNums()}
        <div className={`${prefx}__unit`}>
          <div className={`${prefx}__box`}>
            <IconKeyboard
              onClick={() => {
                onInput?.("close");
              }}
              className={`${prefx}__keyboard-icon`}
            />
          </div>
        </div>
        {renderItem(0, () => {
          onInput?.('input', 0);
        })}
        <div className={`${prefx}__unit`}>
          <div className={`${prefx}__box`}>
            <IconDelete
              onClick={() => {
                onInput?.("delete");
              }}
              className={`${prefx}__delete-icon`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberKeyboard;
