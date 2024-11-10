import type { ReactNode } from 'react';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import { ConfigProvider, App as AppAntd } from 'antd';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import themeSettings from '../config/theme';
import '../config/i18n/config'
import './index.css';
interface AppProps {
  children?: ReactNode
}

const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ConfigProvider theme={themeSettings}>
        <AppAntd>
          <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
        </AppAntd>
      </ConfigProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
