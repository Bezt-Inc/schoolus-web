import { sidebarMenu } from 'config/menu'
import { FC } from 'react'
import { menuItemT } from 'types/menu'
import { MenuItem } from './MenuItem/MenuItem'
import { v4 as uuidv4 } from 'uuid'
import { Pane } from 'evergreen-ui'
interface MenuT {
  activeMenuItem: menuItemT | undefined
}
export const Menu: FC<MenuT> = ({ activeMenuItem }) => {
  return (
    <Pane marginTop={30} flexGrow={1}>
      {sidebarMenu.map((item: menuItemT) => (
        <MenuItem
          isActive={
            activeMenuItem !== undefined && activeMenuItem.key === item.key
          }
          key={uuidv4()}
          item={item}
        />
      ))}
    </Pane>
  )
}
