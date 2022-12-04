import { Button, ButtonProps } from 'evergreen-ui'
import { FC } from 'react'
import style from './CustomPill.module.scss'

interface Props extends ButtonProps {
  content: string
}
const CustomPill: FC<Props> = ({ content, ...restProps }) => {
  return (
    <Button
      className={style.customPill}
      height={20}
      paddingX={5}
      fontSize={12}
      {...restProps}
    >
      {content}
    </Button>
  )
}

export default CustomPill
