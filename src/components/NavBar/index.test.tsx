import { render, screen } from '@testing-library/react'
import Navbar from './index'

it(`Navbar is rendered and contains logo`, () => {
  render(<Navbar />)
  expect(screen.getByText(/app/i)).toBeInTheDocument()
})
