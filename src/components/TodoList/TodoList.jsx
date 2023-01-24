import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'

const TodoList = ({ filter }) => {
    const [todos, setTodos] = useState([
        {
            id:'1',
            text: '장보기',
            status: 'active'
        },
        {
            id:'2',
            text: '공부하기',
            status: 'active'
        },
    ])

    const handleAdd = (todo) => {
        setTodos([...todos, todo])
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((t)=> (t.id === updated.id ? updated : t)))
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((t)=> t.id !== deleted.id))
    }


    function getFilterdItem(todos, filter) {
        if(filter === 'all') {
            return todos;
        }
        return todos.filter(todo=> todo.status === filter)
    }
    const filtered = getFilterdItem(todos, filter);

  return (
    <div>
        <ul>
            {filtered.map((todo)=>{
                return <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
            })}
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </div>
  )
}


export default TodoList


