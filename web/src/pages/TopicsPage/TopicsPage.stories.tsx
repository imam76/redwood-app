import type { Meta, StoryObj } from '@storybook/react'

import TopicsPage from './TopicsPage'

const meta: Meta<typeof TopicsPage> = {
  component: TopicsPage,
}

export default meta

type Story = StoryObj<typeof TopicsPage>

export const Primary: Story = {}
