import { render, screen } from '@testing-library/react'
import App from './components/App'

test('Check if click me button exists', () => {
  render(<App />)
  const linkElement = screen.getByTestId('click-me-button')
  expect(linkElement).toBeInTheDocument()
})
