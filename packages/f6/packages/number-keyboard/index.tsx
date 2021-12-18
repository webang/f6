import { defineName } from "../utils/name";
import { FC } from "react";
import "./index.less";
import IconKeyboard from "./icon-keyboard";
import IconDelete from "./icon-delete";

const [prefix] = defineName("number-keyboard");

export type NumberKeyboardInputType = 'input' | 'delete' | 'close';

export interface NumberKeyboardProps {
  visible?: boolean;
  onInput?: (type: string, value?: number) => void;
}

const NumberKeyboard: FC<NumberKeyboardProps> = ({ visible, onInput }) => {
  const renderItem = (i: number, onClick?: Function) => {
    return (
      <div className={`${prefix}__unit`}>
        <div className={`${prefix}__box`} onClick={() => onClick?.()}>
          {i}
        </div>
      </div>
    );
  };

  const renderGrids = () => {
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
    <div className={`${prefix}`}>
      <div className={`${prefix}__units`}>
        {renderGrids()}
        <div className={`${prefix}__unit`}>
          <div className={`${prefix}__box`}>
            <IconKeyboard
              onClick={() => {
                onInput?.("close");
              }}
              className={`${prefix}__keyboard-icon`}
            />
          </div>
        </div>
        {renderItem(0, () => {
          onInput?.('input', 0);
        })}
        <div className={`${prefix}__unit`}>
          <div className={`${prefix}__box`}>
            <IconDelete
              onClick={() => {
                onInput?.("delete");
              }}
              className={`${prefix}__delete-icon`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberKeyboard;
