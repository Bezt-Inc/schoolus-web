import { Pane, Text } from 'evergreen-ui'
import { FC } from 'react'
import MedicalHistoryBox from './medicalHistory/MedicalHistoryBox'
import { BsLightningFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import colors from 'theme/colors'

const MedicalHistory: FC = () => {
  return (
    <Pane marginTop={30}>
      <Text fontSize={24} fontWeight={500}>
        Medical History
      </Text>

      <MedicalHistoryBox
        Icon={BsLightningFill}
        iconColor={colors.red}
        healthIssue={{ issue: 'High Stress Level', value: '20' }}
        description="Personal Psychological consultation recommended"
      />
      <MedicalHistoryBox
        iconColor={colors.primaryGreen}
        Icon={FaTools}
        healthIssue={{ issue: 'High Stress Level', value: '20' }}
        description="A penchant for art. Drawing classes recommended"
      />
    </Pane>
  )
}

export default MedicalHistory
