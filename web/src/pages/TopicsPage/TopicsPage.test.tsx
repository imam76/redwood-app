import { render } from '@redwoodjs/testing/web'

import TopicsPage from './TopicsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopicsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicsPage />)
    }).not.toThrow()
  })
})
