import { Col, Flex, Layout, Menu, Row, theme } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Navbar = () => {
  const {
    token: { Layout: { headerBg } },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          padding: 0
        }}
      >
        <Row justify="center">
          <Col span={22}>
            <Flex
              align="center"
            >
              <img className="h-8 w-8 mr-2" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: headerBg,
                  border: 'none',
                  boxShadow: 'none',
                }}
              />
            </Flex>
          </Col>
        </Row>
      </Header>
    </Layout >
  )
}

export default Navbar
