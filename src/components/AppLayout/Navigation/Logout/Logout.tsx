import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { TbLogout } from 'react-icons/tb'
import { MenuItem } from '../Menu/MenuItem/MenuItem'

export const Logout: FC = () => {
  const handleLogout = (): void => {}
  return (
    <Pane>
      <MenuItem
        item={{ Icon: TbLogout, name: 'Logout' }}
        isActive={false}
        onClick={handleLogout}
      />
    </Pane>
  )
}
