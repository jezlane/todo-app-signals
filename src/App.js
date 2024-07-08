import React from 'react';
import { todos, completedTodos } from "./todos.js"

import "./styles.css"
import { NewTodoForm } from "./NewTodoForm.js"
import { TodoList } from "./TodoList.js"


export default function App() {
  return (
    <>
        <NewTodoForm/>

        <h1 className="header">Todo List</h1>
        <TodoList todos={todos} />

        <p>Completed Todos: {completedTodos.value}</p>
    </>
  )
}