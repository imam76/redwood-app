import { Layout, Menu } from "antd";
const { Header } = Layout;

const items = [
  {
    key: 'popular',
    label: `Popular`,
  },
  {
    key: 'new',
    label: `New`,
  },
  {
    key: 'reading-list',
    label: `Reading List`,
  }
];

const Navbar = () => {

  return (
    <div>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }} prefix="demo">
          <div className="demo-logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0, width: '100%' }}
          />
        </Header>
      </Layout>
    </div>
  );

}

export default Navbar
