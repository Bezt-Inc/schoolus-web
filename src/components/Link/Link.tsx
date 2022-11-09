import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributeAnchorTarget,
} from 'react'
import { Link as RouterLink } from 'react-router-dom'
// import styles from './link/RouterLink.module.scss'
import classes from 'react-style-classes'

interface RouterLinkToInterface {
  pathname?: string
  state?: object
  hash?: string
  search?: string
}

interface Props {
  to: string | RouterLinkToInterface
  isRouterLink?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: AnyFunction
  target?: HTMLAttributeAnchorTarget
  rel?: string
  style?: CSSProperties
}

const Link = forwardRef<any, Props>(
  ({ to, isRouterLink, className, children, onClick, style, ...rest }, ref) => {
    if (isRouterLink !== undefined || typeof to === 'object') {
      return (
        <RouterLink
          className={classes(className)}
          to={to}
          onClick={onClick}
          style={style}
          {...rest}
          ref={ref}
        >
          {children}
        </RouterLink>
      )
    }

    return (
      <a
        className={className}
        href={to}
        onClick={onClick}
        style={style}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    )
  },
)

Link.defaultProps = {
  isRouterLink: false,
}

Link.displayName = 'Link'

export default Link
