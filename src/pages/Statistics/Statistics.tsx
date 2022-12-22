import SearchInput from 'components/SearchInput/SearchInput'
import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import MedicalHistory from './MedicalHistory/MedicalHistory'
import PersonalRecommendations from './PersonalRecommendations/PersonalRecommendations'
import Profile from './Profile'
import style from './statistics/Statistics.module.scss'

const Statistics: FC = () => {
  return (
    <Pane className={style.statisticContainer}>
      <Pane className={style.main}>
        <Profile />
      </Pane>
      <Pane className={style.aside}>
        <SearchInput />
        <PersonalRecommendations />
        <MedicalHistory />
      </Pane>
    </Pane>
  )
}

export default Statistics
