import { render } from '@testing-library/react'
import App from './components/App'

test('Check if app renders without crashing', () => {
  render(<App />)
})
