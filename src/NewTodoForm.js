import React, { useState } from "react"
import { addTodo } from "./todos.js"

export function NewTodoForm({ onSubmit }) {

  function handleSubmit(e) {
    e.preventDefault()
    if (e.target["item"].value === "") return

    addTodo(e.target["item"].value)
    e.target["item"].value = ""
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}