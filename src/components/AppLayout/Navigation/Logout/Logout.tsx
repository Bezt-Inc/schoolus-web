import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { TbNotes } from 'react-icons/tb'
import { MenuItem } from '../Menu/MenuItem/MenuItem'

export const Logout: FC = () => {
  const handleLogout = (): void => {}
  return (
    <Pane>
      <MenuItem
        item={{ Icon: TbNotes, name: 'Logout' }}
        isActive={false}
        onClick={handleLogout}
      />
    </Pane>
  )
}
