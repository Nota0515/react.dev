import React, { useState } from 'react'

const AddTodos = ({onAddTodo}) => {
    const [title , setTitle] = useState('');
  return (
    <>
      <input 
      placeholder='Add todo'
      value={title}
      onChange={e => setTitle(e.target.value)}
      />
      <button
      className='bg-slate-500'
      onClick={() =>{
        setTitle('')
        onAddTodo(title)
      }}
      >Add</button>
    </>
  )
}

export default AddTodos
