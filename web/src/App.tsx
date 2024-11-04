import type { ReactNode } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'

import './index.css'
import { ConfigProvider, App as AntdApp } from 'antd'
import themeSettings from './theme/ThemeSetting'

interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <ConfigProvider theme={themeSettings}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AntdApp>
          <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
        </AntdApp>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ConfigProvider>
)

export default App
