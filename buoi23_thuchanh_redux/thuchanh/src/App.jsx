import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ListCourse from './page/ListCourse'
import CreateCourse from './page/CreateCourse'
import EditCourse from './page/EditCourse'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='admin/course'>
            <Route index element={<ListCourse />} />
            <Route path='create' element={<CreateCourse />} />
            <Route path=':courseId' element={<EditCourse />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
