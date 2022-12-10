import { Heading, Pane, Text } from 'evergreen-ui'
import { FC } from 'react'
import { IconType } from 'react-icons'
import colors from 'theme/colors'

interface Props {
  title: string
  description: string
  Icon: IconType
  iconColor: string
}

const RecommendationBox: FC<Props> = props => {
  const { title, description, Icon, iconColor } = props
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
      <Pane>
        <Pane
          width={50}
          height={50}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={colors.white}
          border={colors.grayLight}
          borderWidth={1}
          borderStyle="solid"
        >
          <Icon size={30} color={iconColor} />
        </Pane>
      </Pane>
      <Pane>
        <Heading marginBottom={10}>{title}</Heading>
        <Text fontSize={16} color={colors.grayLight}>
          {description}
        </Text>
      </Pane>
    </Pane>
  )
}

export default RecommendationBox
