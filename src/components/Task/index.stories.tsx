import type { Meta, StoryObj } from '@storybook/react'

import Task from './index'

const meta = {
  title: 'Components/Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    villageName: 'Bambu',
    assignee: 'Daniel Gil',
    type: 'survey',
    status: 'active',
  },
}
