import { defineName } from '../utils/name';
import { FC, useContext } from 'react';
import Icon from 'f6-icons';
import classNames from 'classnames';
import { CheckListContext } from './context';

export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
}

const [prefix] = defineName('check-list-item')

const CheckListItem: FC<CheckListItemProps> = p => {
  const { children, value, disabled, onClick } = p;
  const context = useContext(CheckListContext);
  const isChecked = context?.value.includes(value);

  const handleClick: React.MouseEventHandler = () => {
    if (disabled) {
      return;
    }

    onClick?.();

    if (isChecked) {
      context?.uncheck(value);
    } else {
      context?.check(value);
    }
  }

  const mCls = classNames([prefix, 'hairline-bottom'], {
    [`${prefix}--disabled`]: disabled
  })

  return (
    <div className={mCls} onClick={handleClick}>
      <div>{children}</div>
      {isChecked && <Icon className={`${prefix}__icon`} name="success3" /> }
    </div>
  )
}

export default CheckListItem;