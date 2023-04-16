import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import HomePage from './components/page/home/HomePage'
import SearchPage from './components/page/search/SearchPage'
import CategoryList from './components/page/category/CategoryList'
import CategoryDetail from './components/page/category/CategoryDetail'
import BlogDetail from './components/page/blog/BlogDetail'
import NotFound from './components/page/not-found/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />

          <Route path='categories'>
            <Route index element={<CategoryList />} />
            <Route path=':categoryName' element={<CategoryDetail />} />
          </Route>

          <Route
            path='blogs/:blogId/:blogSlug'
            element={<BlogDetail />}
          />

          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
