// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import HeaderContentFooterLayout from './layouts/HeaderContentFooterLayout/HeaderContentFooterLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeaderContentFooterLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/news" page={NewsPage} name="news" />
        <Route path="/topics" page={TopicsPage} name="topics" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
