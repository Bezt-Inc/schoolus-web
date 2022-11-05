import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'evergreen-ui'
import EvergreenUITheme from './evergreen'

interface Props {
  children: ReactNode
}

const EvergreenUIThemeProvider: FC<Props> = ({ children }) => (
  <ThemeProvider value={EvergreenUITheme}>{children}</ThemeProvider>
)

export default EvergreenUIThemeProvider
