// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NewsPage = () => {
  return (
    <>
      <Metadata title="News" description="News page" />

      <h1>NewsPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewsPage/NewsPage.tsx</code>
      </p>
      {/*
          My default route is named `news`, link to me with:
          `<Link to={routes.news()}>News</Link>`
      */}
    </>
  )
}

export default NewsPage
