import { FC } from 'react'
import SchoolusLogo from 'images/layout/logo.png'
import style from './Logo.module.scss'
import { Pane, Text } from 'evergreen-ui'

export const Logo: FC = () => {
  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <img className={style.logo} src={SchoolusLogo} alt="" />
      <Text fontWeight="bold">SCHOOLUS</Text>
    </Pane>
  )
}
