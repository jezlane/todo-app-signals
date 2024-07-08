import React from 'react';
import { TodoItem } from "./TodoItem"

export function TodoList({ todos }) {
  return (
    <ul className="list">
      {todos.value.length === 0 && "No Todos"}
      {todos.value.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
          />
        )
      })}
    </ul>
  )
}