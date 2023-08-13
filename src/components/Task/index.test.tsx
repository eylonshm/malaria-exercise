import { render, screen } from '@testing-library/react'
import Task from './index'

it(`Task is rendered well`, () => {
  render(
    <Task
      villageName='Banbuiyas'
      assignee='Or Meydan'
      type='survey'
      status='active'
    />,
  )
})
