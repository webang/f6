import { defineName } from "../utils/name";
import { FC, ReactNode } from "react";
import "./index.less";
import classNames from "classnames";
import Popup from "../popup";

export interface ActionItem {
  name: ReactNode;
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
}) => {
  const renderAction = (it: ActionItem, index: number) => {
    const content =
      typeof it.render === "function" ? (
        it.render()
      ) : (
        <>
          <div className={`${prefix}-item-name`}>{it.name}</div>
          <div className={`${prefix}-item-desc`}>{it.desc}</div>
        </>
      );
    return (
      <div
        onClick={() => callback?.(index)}
        key={index}
        className={classNames([`${prefix}-item`, "hairline"])}
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
      {title && <div className={classNames([`${prefix}-title`, 'hairline'])}>{title}</div>}
      <div className={classNames([className, prefix])}>
        <div className={`${prefix}-items`}>{actions?.map(renderAction)}</div>
      </div>
      <div className={classNames([`${prefix}-gap`])}></div>
      <div
        className={classNames([`${prefix}-item`])}
        onClick={() => onClose?.()}
      >
        <div className={`${prefix}-item-name`}>取消</div>
      </div>
    </Popup>
  );
};

export default ActionSheet;