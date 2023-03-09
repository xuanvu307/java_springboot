import { Route, Routes } from 'react-router-dom'
import UserList from './user/UserList'
import UserCreate from './user/UserCreate'
import UserDetail from './user/UserDetail'
import NotFound from './not-found/NotFound'

function App() {
  // /users
  // /users/create
  // /users/{id}
  return (
    <>
      <Routes>
        <Route path='/users'>
            <Route index element = {<UserList/>}/>
            <Route path='create' element = {<UserCreate />}/>
            <Route path=':userId' element = {<UserDetail />} />
        </Route>
        <Route path='*' element = {<NotFound />} />
      </Routes>
    </>
  )
}

export default App
