import { defaultTheme } from 'evergreen-ui'
import colors from './colors'

const EvergreenUITheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
} as const
export type EvergreenUIThemeType = typeof EvergreenUITheme
export default EvergreenUITheme
