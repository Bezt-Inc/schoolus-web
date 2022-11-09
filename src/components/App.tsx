import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import colors from 'theme/colors'
import EvergreenUIThemeProvider from '../theme/provider'
import { ContentArea } from './AppLayout/ContentArea/ContentArea'
import { Navigation } from './AppLayout/Navigation/Navigation'

export const App: FC = () => {
  return (
    <EvergreenUIThemeProvider>
      <BrowserRouter>
        <Pane display="flex" backgroundColor={colors.gray}>
          <Navigation />
          <ContentArea />
        </Pane>
      </BrowserRouter>
    </EvergreenUIThemeProvider>
  )
}

export default App
