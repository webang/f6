import classNames from 'classnames'
import { defineName } from "../utils/name";
import React from 'react'
import "./index.less";

const [prefix] = defineName("badge");

export const dot = Symbol()

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string,
  className?: string
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { content, color='#FF411C', children } = props

  const isDot = content === dot

  const badgeCls = classNames(prefix, {
    [`${prefix}-fixed`]: !!children,
    [`${prefix}-dot`]: isDot,
  })
  const element = content
    ?(<div
        className={badgeCls}
        style={{
          backgroundColor: color,
        }}
      >
        {!isDot && content}
      </div>
      )
    : null

  return children ? (
    <div className={`${prefix}-wrap`}>
      {children}
      {element}
    </div>
  ) : (
    element
  )
}
export default Badge
