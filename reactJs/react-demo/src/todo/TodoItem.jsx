import React from 'react'

function TodoItem({title,index, onDelete}) {
    const handleDelete =() =>{
        onDelete(index);
    }
  return (
    <div>
        {title}
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem