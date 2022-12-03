import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import style from './statistics/Statistics.module.scss'

const Statistics: FC = () => {
  return (
    <Pane className={style.statisticContainer}>
      <Pane className={style.main}>main</Pane>
      <Pane className={style.aside}>aside</Pane>
    </Pane>
  )
}

export default Statistics
