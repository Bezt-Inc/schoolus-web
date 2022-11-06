import { FC } from 'react'
import SchoolusLogo from 'images/layout/logo.png'
import style from './Logo.module.scss'

export const Logo: FC = () => {
  return (
    <div>
      <img className={style.logo} src={SchoolusLogo} alt="" />
    </div>
  )
}
