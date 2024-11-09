import type { ReactNode } from 'react';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import { ConfigProvider } from 'antd';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import themeSettings from '../config/theme';
import '../config/i18n/config'
import './index.css';
interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <ConfigProvider theme={themeSettings}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ConfigProvider>
)

export default App
