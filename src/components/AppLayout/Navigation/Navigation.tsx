import { Logo } from 'components/Logo/Logo'
import useSchoolusNavigation from 'hooks/useSchoolusNavigation'
import { FC } from 'react'
import { Logout } from './Logout/Logout'
import { Menu } from './Menu/Menu'
import style from './Navigation.module.scss'

export const Navigation: FC = () => {
  const { activeMenuItem } = useSchoolusNavigation()

  return (
    <nav className={style.navigation}>
      <Logo />
      <Menu activeMenuItem={activeMenuItem} />
      <Logout />
    </nav>
  )
}
