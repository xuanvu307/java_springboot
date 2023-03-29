import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ListCourse from './page/course/ListCourse'
import OnlineCourse from './page/course/OnlineCourse'
import OnlabCourse from './page/course/OnlabCourse'
import CourseDetail from './page/course/CourseDetail'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/khoa-hoc'>
            <Route index element={<ListCourse/>} />
            <Route path='online' element={<OnlineCourse/>} />
            <Route path='onlab' element={<OnlabCourse/>} />
            <Route path=':courseId' element={<CourseDetail/>} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
