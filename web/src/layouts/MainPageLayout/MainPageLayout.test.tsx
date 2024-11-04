import { render } from '@redwoodjs/testing/web'

import MainPageLayout from './MainPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainPageLayout />)
    }).not.toThrow()
  })
})
