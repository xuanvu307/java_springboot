import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const [todos, setTodos] =useState(["hoc","choi"])
    const {Appname} = props;
    const handleDelete = (index) =>{
        const newTodos = todos.filter((todo,i) => i != index)
        setTodos(newTodos);
    }
    return (
        <>     
            <div>{Appname}</div>
            {todos.map((todo,index) =>(
                <TodoItem
                    key={index}
                    title = {todo}
                    index ={index}
                    onDelete = {handleDelete}
                />
            ))}
        </>
    );
    
  
}
export default TodoList