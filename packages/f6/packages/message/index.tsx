import { defineName } from "../utils/name";
import { CSSProperties, FC, ReactNode } from "react";
import './index.less';
import classNames from "classnames";
import Icon from "f6-icons";

export interface MessageProps {
  type?: 'primary' |  'success' | 'warning' | 'danger';
  icon?: ReactNode;
  link?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const [prefix] = defineName('message');

const Message: FC<MessageProps> = ({
  className,
  type = 'primary',
  children,
  icon,
  link = false,
  ...restProps
}) => {
  const mCls = classNames([
    prefix,
    `${prefix}--${type}`,
    className
  ], {
    [`${prefix}--link`]: link
  });

  const renderIcon = () => {
    if (icon) return icon;
    switch (type) {
      case "success":
        return <Icon name="success" style={{ fontSize: '18px' }}/>
      case "danger":
      case "primary":
      case "warning":
        return <Icon name="error" />
    }
  }

  return (
    <div className={mCls} {...restProps} >
      <span className={`${prefix}__icon`}> {renderIcon()} </span>
      <div className={`${prefix}__body`}>
        <div>{children}</div>
        { link && (
          <Icon className={`${prefix}__link`} name="arrow-right" />
        )}
      </div>
    </div>
  );
};

export default Message;
