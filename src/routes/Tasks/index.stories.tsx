import type { Meta, StoryObj } from '@storybook/react'

import Tasks from './index'

const meta = {
  title: 'Routes/Tasks',
  component: Tasks,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tasks>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
