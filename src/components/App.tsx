import { Button, Pane, Text, majorScale, Avatar } from 'evergreen-ui'
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

        <Text marginLeft={20}>This is a clickable Button</Text>

        <Pane margin={20}>
          <Avatar name="Steve Jobs" size={40} marginRight={16} />
          <Avatar name="Bill Gates" size={40} marginRight={16} />
          <Avatar name="Elon Musk" size={40} marginRight={16} />
          <Avatar name="Allen Kleiner" color="green" size={40} />
        </Pane>
      </Pane>
    </EvergreenUIThemeProvider>
  )
}

export default App
