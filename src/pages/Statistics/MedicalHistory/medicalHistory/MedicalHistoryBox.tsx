import { Heading, Pane, StatusIndicator, Text } from 'evergreen-ui'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa'
import colors from 'theme/colors'

interface HealthIssue {
  issue: string
  value: string
}

interface Props {
  healthIssue: HealthIssue
  description: string
  Icon: IconType
  iconColor: string
}

const MedicalHistoryBox: FC<Props> = props => {
  const { healthIssue, description, iconColor } = props
  return (
    <Pane
      display="flex"
      alignItems="center"
      border={colors.grayLight}
      borderWidth={1}
      borderStyle="solid"
      backgroundColor={colors.gray}
      paddingX={30}
      paddingY={20}
      gap={30}
      borderRadius={10}
      marginTop={20}
    >
      <Pane flexGrow={1}>
        <Pane display="flex" justifyContent="space-between">
          <Heading marginBottom={10}>{healthIssue.issue}</Heading>
          <Text>{healthIssue.value}</Text>
        </Pane>
        <Text fontSize={16} color={colors.grayLight}>
          {description}
        </Text>
        <Pane display="flex" justifyContent="space-between" marginTop={15}>
          <StatusIndicator dotSize={20} color={iconColor} />
          <Pane color={colors.primaryGreen}>
            <Text cursor="pointer" color="inherit" marginRight={5}>
              See full history
            </Text>
            <FaArrowRight color="inherit" />
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default MedicalHistoryBox
