import Link from 'components/Link/Link'
import { Pane, Text } from 'evergreen-ui'
import { FC } from 'react'
import classes from 'react-style-classes'
import { menuItemT } from 'types/menu'
import style from './Menuitem.module.scss'
interface Props {
  isActive: boolean
  item: Pick<menuItemT, 'Icon' | 'name' | 'routerUrl'>
  onClick?: AnyFunction
}
export const MenuItem: FC<Props> = ({
  item: { Icon, name, routerUrl },
  isActive,
  onClick,
}) => {
  return (
    <Link
      to={routerUrl !== undefined ? routerUrl : ''}
      className={classes(
        style.menuItem,
        isActive ? style.linkActive : style.linkDefault,
      )}
      onClick={onClick}
    >
      <Pane className={classes(style.iconBox, isActive && style.iconBoxActive)}>
        <Icon />
      </Pane>
      <Text className={classes(style.menuText)}>{name}</Text>
    </Link>
  )
}
