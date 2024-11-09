// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next';
import Navbar from 'src/components/Navbar/Navbar'

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Navbar />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
        {t('hello_world')}
      </p>
      <Button
        type="primary"
        size='large'
        onClick={() => changeLanguage('id')}
      >
        id
      </Button>
      <Button
        type="primary"
        size='large'
        onClick={() => changeLanguage('en')}
      >
        en
      </Button>
      {/*
          My default route is named `home`, link to me with:
          `<Link to={routes.home()}>Home</Link>`
      */}
    </>
  )
}

export default HomePage
