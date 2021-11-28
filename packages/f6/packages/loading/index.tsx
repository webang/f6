import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { defineName } from "../utils/name";
import "./index.less";
import Spinner, { SpinnerType } from '../spinner';

export interface LoadingProps {
  spinnerType?: SpinnerType;
  spinnerSize?: string|number;
  className?: string;
  style?: React.CSSProperties;
  vertical?: boolean;
  message?: ReactNode;
}

const Loading: FC<LoadingProps> = ({
  vertical = false,
  spinnerType = 'crescent',
  spinnerSize = '24',
  className, 
  children,
  message = 'Loading',
  ...restProps
}) => {
  const [prefix] = defineName("loading");
  const mCls = classNames([prefix, className], {
    [`${prefix}--vertical`]: vertical
  });

  return (
    <div className={mCls} {...restProps}>
      <Spinner className={`${prefix}__icon`} type={spinnerType} size={spinnerSize}/>
      <div className={`${prefix}__text`}>{children || message}</div>
    </div>
  );
};

export default Loading;