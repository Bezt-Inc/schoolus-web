import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import colors from 'theme/colors'
import { Navigation } from './Navigation/Navigation'
import style from './appLayout/AppLayout.module.scss'

const AppLayout: FC = () => {
  return (
    <Pane display="flex" backgroundColor={colors.gray}>
      <Navigation />
      <Pane className={style.contentArea}>
        <Outlet />
      </Pane>
    </Pane>
  )
}

export default AppLayout
