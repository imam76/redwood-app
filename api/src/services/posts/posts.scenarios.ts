import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { code: 'String1072582', title: 'String', body: 'String' } },
    two: { data: { code: 'String1078398', title: 'String', body: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
