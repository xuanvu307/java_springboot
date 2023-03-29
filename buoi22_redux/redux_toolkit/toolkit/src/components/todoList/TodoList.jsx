import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../app/slices/todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo())
    }
    return (
        <>
            <h2>Todo List</h2>
            {todos.length > 0 && todos.map((todo, title) => (
                <p key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </p>
            ))}
            {todos.length === 0 && (
                <p>Không có công việc nào trong danh sách</p>
            )}
        </>
    )
}

export default TodoList