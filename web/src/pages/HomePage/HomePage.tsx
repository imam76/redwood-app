// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web';
import { App, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const showNotification = () => {
    notification.info({
      message: 'Notification topLeft',
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <h1>HomePage</h1>

      <Space wrap>
        <Button
          type="primary"
          size='middle'
          onClick={() => changeLanguage('id')}
        >
          id
        </Button>
        <Button
          type="primary"
          size='middle'
          onClick={() => changeLanguage('en')}
        >
          en
        </Button>
        <Button type="primary" onClick={showMessage}>
          Open message
        </Button>
        <Button type="primary" onClick={showModal}>
          Open modal
        </Button>
        <Button type="primary" onClick={showNotification}>
          Open notification
        </Button>
      </Space>

      <p>
        {t('hello_world')}
      </p>
      {/*
          My default route is named `home`, link to me with:
          `<Link to={routes.home()}>Home</Link>`
      */}
    </>
  )
}

export default HomePage
