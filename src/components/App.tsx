import { Button, Pane, Text, majorScale } from 'evergreen-ui'
import { FC } from 'react'
import colors from '../theme/colors'
import EvergreenUIThemeProvider from '../theme/provider'

export const App: FC = () => {
  return (
    <EvergreenUIThemeProvider>
      <Pane
        alignItems="center"
        marginX={majorScale(2)}
        height="100vh"
        background={colors.white}
        padding={20}
        marginLeft={0}
        marginRight={0}
      >
        <Button appearance="primary" data-testid="click-me-button">
          Click me!
        </Button>
        <Text>This is a clickable Button</Text>
      </Pane>
    </EvergreenUIThemeProvider>
  )
}

export default App
