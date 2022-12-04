import { Pane } from 'evergreen-ui'
import { FC } from 'react'

interface Props {
  imgSrc: string
  size?: string | number
}
const UserAvatar: FC<Props> = ({ imgSrc, size }) => {
  return (
    <Pane width={size} height={size} overflow="hidden" borderRadius={10}>
      <img src={imgSrc} alt="user avatar" width="100%" />
    </Pane>
  )
}

export default UserAvatar
