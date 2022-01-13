import classNames from "classnames";
import { defineName } from "../utils/name";
import React from "react";
import "./index.less";

const [prefix] = defineName("badge");

export type BadgeProps = {
  content?: React.ReactNode | symbol;
  color?: string;
  className?: string;
};

const dot = Symbol('dot');

const Badge: React.FC<BadgeProps> & { dot: symbol } = (props) => {
  const { content, color = "#FF411C", children } = props;
  const isDot = content === dot;
  const badgeCls = classNames(prefix, {
    [`${prefix}-dot`]: isDot,
    [`${prefix}-corner`]: !!children,
  });

  const element = content ? (
    <div className={badgeCls} style={{ backgroundColor: color }} >
      { isDot ? null : content}
    </div>
  ) : null;

  return children ? (
    <div className={`${prefix}-wrap`}>
      {children}
      {element}
    </div>
  ) : (
    element
  );
};

Badge.dot = dot;

export default Badge;
