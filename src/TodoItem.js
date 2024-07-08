import React from 'react';
import { deleteTodo, toggleTodo } from "./todos"

export function TodoItem({ completed, id, title }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button 
          onClick={() => 
          deleteTodo(id)} className="btn btn-danger"
          >
          Delete
        </button>
      </li>
    )
  }