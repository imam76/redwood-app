import { render } from '@redwoodjs/testing/web'

import HeaderContentFooterLayout from './HeaderContentFooterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HeaderContentFooterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderContentFooterLayout />)
    }).not.toThrow()
  })
})
