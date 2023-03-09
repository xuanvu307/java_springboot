import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './todo/TodoList'
import Counter from './counter/Counter'
import Register from './register/Register'

function App() {
  const [show, setShow] = useState(true);
  const toggle = () =>{
    setShow(!show)
  }

  return (
    <>
      <TodoList/>
      {show && <Counter />}
      <button onClick={toggle}>Toggle</button>

      <Register/>
    </>
    
  )
}

export default App;
