import { defineName } from "../utils/name";
import { FC, ReactNode } from "react";
import "./index.less";
import classNames from "classnames";
import Popup from "../popup";

export interface ActionItem {
  title: ReactNode;
  desc?: ReactNode;
  render?: () => ReactNode;
}

export interface ActionSheetProps {
  className?: string;
  title?: ReactNode;
  actions?: ActionItem[];
  visible: boolean;
  borderRadiusSize: number;
  onClose?: () => void;
  callback?: (index: number) => void;
  cancelText?: string;
}

const [prefix] = defineName("action-sheet");

const ActionSheet: FC<ActionSheetProps> = ({
  className,
  actions,
  visible,
  callback,
  title,
  borderRadiusSize = 12,
  onClose,
  cancelText = "cancel",
}) => {
  const renderAction = (it: ActionItem, index: number) => {
    const content =
      typeof it.render === "function" ? (
        it.render()
      ) : (
        <>
          <div className={`${prefix}-item-name`}>{it.title}</div>
          <div className={`${prefix}-item-desc`}>{it.desc}</div>
        </>
      );
    return (
      <div
        onClick={() => callback?.(index)}
        key={index}
        className={classNames([
          `${prefix}-item`,
          `hairline-bottom`,
          `${prefix}-action`,
        ])}
      >
        {content}
      </div>
    );
  };

  return (
    <Popup
      style={{
        borderTopLeftRadius: borderRadiusSize,
        borderTopRightRadius: borderRadiusSize,
      }}
      visible={visible}
      position="bottom"
    >
      <div className={classNames([className, prefix])}>
        {title && (
          <div className={classNames([`${prefix}-title`, "hairline-bottom"])}>
            {title}
          </div>
        )}
        <div className={`${prefix}-items`}>{actions?.map(renderAction)}</div>
        <div className={classNames([`${prefix}-gap`])}></div>
        <div
          className={classNames([`${prefix}-item`, `${prefix}-action`])}
          onClick={() => onClose?.()}
        >
          <div className={`${prefix}-item-name`}>{cancelText}</div>
        </div>
      </div>
    </Popup>
  );
};

export default ActionSheet;
