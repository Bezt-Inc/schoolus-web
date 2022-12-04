import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import Profile from './Profile'
import style from './statistics/Statistics.module.scss'

const Statistics: FC = () => {
  return (
    <Pane className={style.statisticContainer}>
      <Pane className={style.main}>
        <Profile />
      </Pane>
      <Pane className={style.aside}>aside</Pane>
    </Pane>
  )
}

export default Statistics
