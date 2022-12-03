import { FC } from 'react'
import SchoolusLogo from 'images/layout/logo.png'
import style from './Logo.module.scss'
import { Pane, Text } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom'

export const Logo: FC = () => {
  const navigate = useNavigate()

  const goToLandingPage = (): void => navigate('/')

  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <img
        onClick={goToLandingPage}
        className={style.logo}
        src={SchoolusLogo}
        alt=""
      />
      <Text className={style.logoText}>SCHOOLUS</Text>
    </Pane>
  )
}
