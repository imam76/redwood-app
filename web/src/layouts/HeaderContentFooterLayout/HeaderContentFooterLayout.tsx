import { Col, Flex, Row } from "antd";
import Navbar from "src/components/Navbar/Navbar";

type HeaderContentFooterLayoutProps = {
  children?: React.ReactNode
}

const HeaderContentFooterLayout = ({
  children,
}: HeaderContentFooterLayoutProps) => {

  return (
    <>
      <Navbar />
      <Row justify={'center'}>
        <Col span={20}>
          <div style={{ paddingTop: 32 }}>
            {children}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default HeaderContentFooterLayout
