import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { BiSearch } from 'react-icons/bi'
import colors from 'theme/colors'
import style from './SearchInput.module.scss'

const SearchInput: FC = () => {
  return (
    <Pane className={style.inputContainer}>
      <input className={style.inputControl} type="text" placeholder="Search" />
      <BiSearch size={30} color={colors.grayLight} />
    </Pane>
  )
}
export default SearchInput
