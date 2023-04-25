import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import PrivateRoutes from './component/PrivateRoutes'
import ListBlog from './page/ListBlog'
import OwnBlog from './page/OwnBlog'
import BlogCreate from './page/BlogCreate'
import BlogDetail from './page/BlogDetail'
import LoginPage from './page/login/LoginPage'
import AuthorizeRoutes from './component/AuthorizeRoutes'
import NotFound from './component/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        {/* phân quyền yêu cầu đăng nhập */}
        <Route element={<PrivateRoutes />}>
          <Route path='/admin' element={<Layout />} >
            {/* BLOG */}
            <Route path='blogs'>
              <Route element={<AuthorizeRoutes requireRoles={["ADMIN"]} />}>
                <Route index element={<ListBlog />} />
              </Route>
              <Route element={<AuthorizeRoutes requireRoles={["ADMIN", "AUTHOR"]} />}>
                <Route path='own-blog' element={<OwnBlog />} />
                <Route path='create' element={<BlogCreate />} />
                <Route path=':blogId' element={<BlogDetail />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='/admin/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
