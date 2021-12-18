import { defineName } from '../utils/name';
import { FC, useContext } from 'react';
import Icon from 'f6-icons';
import classNames from 'classnames';
import { CheckListContext } from './context';

export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  renderIcon?: (checked: boolean) => React.ReactNode;
}

const [prefix] = defineName('check-list-item')

const CheckListItem: FC<CheckListItemProps> = p => {
  const { children, value, disabled, onClick, renderIcon } = p;
  const context = useContext(CheckListContext);

  if (!context) return null;

  const isChecked = context?.value.includes(value) || false;

  const handleClick: React.MouseEventHandler = () => {
    if (disabled) return;

    onClick?.();

    if (isChecked) {
      context.uncheck(value);
    } else {
      context.check(value);
    }
  }

  const mRenderIcon = () => {
    if (renderIcon) {
      return renderIcon(isChecked);
    }
    if (context.renderIcon) {
      return context.renderIcon(isChecked);
    }
    if (isChecked) {
      return <Icon name="success3" style={{ fontSize: 14 }} />
    }
  }

  const mCls = classNames([prefix, 'hairline-bottom'], {
    [`${prefix}--disabled`]: disabled,
    [`${prefix}--label-${context.labelPosition}`]: true
  })

  return (
    <div className={mCls} onClick={handleClick}>
      <div>{children}</div>
      <div className={`${prefix}__icon`}>
        {mRenderIcon()}
      </div>
    </div>
  )
}

export default CheckListItem;