import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(10);
    const decrement = () =>{
        setCount(count-1);
    }
    const increment = () =>{
        setCount(count +1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick = {decrement}>Tăng</button>
        <button onClick = {increment}>Giảm</button>
    </div>
  )
}

export default Counter;