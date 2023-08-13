import { render, screen } from '@testing-library/react'
import Button from './index'

it(`Button is rendered well`, () => {
  render(<Button text='click' onClick={() => {}} />)
})
