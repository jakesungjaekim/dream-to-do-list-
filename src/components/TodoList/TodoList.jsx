import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo'
import AddTodo from '../AddTodo/AddTodo'
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
    const [todos, setTodos] = useState(()=>readTodosFromLocalStorage())

    const handleAdd = (todo) => {
        setTodos([...todos, todo])
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map((t)=> (t.id === updated.id ? updated : t)))
    }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((t)=> t.id !== deleted.id))
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])



    function getFilterdItem(todos, filter) {
        if(filter === 'all') {
            return todos;
        }
        return todos.filter(todo=> todo.status === filter)
    }
    const filtered = getFilterdItem(todos, filter);

    function readTodosFromLocalStorage() {
        const todos = localStorage.getItem('todos')
        return todos ? JSON.parse(todos) : []
    }

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {filtered.map((todo)=>{
                return <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
            })}
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </div>
  )
}


export default TodoList


