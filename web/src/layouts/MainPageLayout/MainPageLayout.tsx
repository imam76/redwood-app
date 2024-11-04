import Navbar from "src/components/Navbar/Navbar"
import { Layout } from 'antd';
const { Footer } = Layout;

type MainPageLayoutProps = {
  children?: React.ReactNode
}

const MainPageLayout = ({ children }: MainPageLayoutProps) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Sixday Style Co. ©{new Date().getFullYear()} Created by Imam Nawawi
      </Footer>
    </>
  )
}

export default MainPageLayout
