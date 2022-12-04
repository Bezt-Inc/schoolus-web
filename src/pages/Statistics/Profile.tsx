import UserAvatar from 'components/UserAvatar/UserAvatar'
import { Button, Heading, Pane, Text } from 'evergreen-ui'
import { FC } from 'react'
import Profile1 from 'images/profiles/profile1.jpeg'
import colors from 'theme/colors'
import CustomPill from 'components/CustomPill/CustomPill'
const Profile: FC = () => {
  return (
    <Pane display="flex" gap={40}>
      <Pane>
        <UserAvatar imgSrc={Profile1} size={180} />
      </Pane>
      <Pane fontSize={14}>
        <CustomPill
          content="New Student"
          backgroundColor={colors.primaryGreen}
          color={colors.white}
        />
        <Heading marginTop={20} fontWeight={500} fontSize={38}>
          Gabriella Richardson
        </Heading>
        <Pane marginTop={20}>
          <Text>
            <Text color={colors.grayLight} marginRight={5}>
              School
            </Text>
            Harvey Mudd College, California
          </Text>
          <Text marginLeft={20}>
            <Text color={colors.grayLight} marginRight={5}>
              Age
            </Text>
            <Text>15</Text>
          </Text>
        </Pane>
        <Pane>
          <Text>
            <Text color={colors.grayLight} marginRight={5}>
              Mother
            </Text>
            Tyrell Mccaffrey
          </Text>
          <Text marginLeft={20}>
            <Text color={colors.grayLight} marginRight={5}>
              Father
            </Text>
            <Text>Usman Rankin</Text>
          </Text>
        </Pane>
        <Button
          color={colors.primaryGreen}
          borderColor={colors.primaryGreen}
          marginTop={20}
          borderRadius={10}
        >
          View full profile
        </Button>
      </Pane>
    </Pane>
  )
}

export default Profile
