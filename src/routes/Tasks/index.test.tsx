import { render, screen } from '@testing-library/react'
import Tasks from './index'

it(`Tasks is rendered and contains logo`, () => {
  render(<Tasks />)
  expect(screen.getByText(/app/i)).toBeInTheDocument()
})
