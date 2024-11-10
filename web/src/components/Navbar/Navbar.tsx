import { Link, routes } from "@redwoodjs/router";
import { Col, Flex, Layout, Menu, Row, theme } from "antd";
import { useTranslation } from "react-i18next";
const { Header } = Layout;


const Navbar = () => {
  const { t } = useTranslation();
  const items = [
    {
      key: 'home',
      label: <Link to={routes.home()}>{t('home')}</Link>,
    },
    {
      key: 'news',
      label: <Link to={routes.news()}>{t('news')}</Link>,
    },
    {
      key: 'topics',
      label: <Link to={routes.topics()}>{t('topics')}</Link>,
    }
  ];
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
          <Col span={20}>
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
