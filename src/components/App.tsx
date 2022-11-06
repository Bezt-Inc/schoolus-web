import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import colors from 'theme/colors'
import EvergreenUIThemeProvider from '../theme/provider'
import { ContentArea } from './AppLayout/ContentArea/ContentArea'
import { Navigation } from './AppLayout/Navigation/Navigation'

export const App: FC = () => {
  return (
    <EvergreenUIThemeProvider>
      <Pane display="flex" backgroundColor={colors.gray}>
        <Navigation />
        <ContentArea />
      </Pane>
    </EvergreenUIThemeProvider>
  )
}

export default App
