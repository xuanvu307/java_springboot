import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import PrivateRoutes from './component/PrivateRoutes'
import ListBlog from './page/ListBlog'
import OwnBlog from './page/OwnBlog'
import BlogCreate from './page/BlogCreate'
import BlogDetail from './page/BlogDetail'
import LoginPage from './page/login/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Layout />} >
          <Route element={<PrivateRoutes />}>
            {/* BLOG */}
            <Route path='blogs'>
              <Route index element={<ListBlog />} />
              <Route path='own-blog' element={<OwnBlog />} />
              <Route path='create' element={<BlogCreate />} />
              <Route path=':blogId' element={<BlogDetail />} />
            </Route>
            
          </Route>
        </Route>
        <Route path='/admin/login' element = {<LoginPage />}/>
      </Routes>
    </>
  )
}

export default App
