import { Logo } from 'components/Logo/Logo'
import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import style from './Navigation.module.scss'

export const Navigation: FC = () => {
  return (
    <nav className={style.navigation}>
      <Pane display="flex" justifyContent="center">
        <Logo />
      </Pane>
    </nav>
  )
}
