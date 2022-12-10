import { Pane, Text } from 'evergreen-ui'
import { FC } from 'react'
import RecommendationBox from './personalRecommendations/RecommendationBox'
import { BsLightningFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import colors from 'theme/colors'

const PersonalRecommendations: FC = () => {
  return (
    <Pane marginTop={30}>
      <Text fontSize={24} fontWeight={500}>
        Personal recommendations
      </Text>

      <RecommendationBox
        Icon={BsLightningFill}
        iconColor={colors.red}
        title="High Stress Level"
        description="Personal Psychological consultation recommended"
      />
      <RecommendationBox
        iconColor={colors.primaryGreen}
        Icon={FaTools}
        title="Afterschool Programmes"
        description="A penchant for art. Drawing classes recommended"
      />
    </Pane>
  )
}

export default PersonalRecommendations
