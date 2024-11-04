import type { Meta, StoryObj } from '@storybook/react'

import MainPageLayout from './MainPageLayout'

const meta: Meta<typeof MainPageLayout> = {
  component: MainPageLayout,
}

export default meta

type Story = StoryObj<typeof MainPageLayout>

export const Primary: Story = {}
