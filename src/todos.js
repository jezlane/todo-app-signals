import { signal, effect, computed } from "@preact/signals-react"

export const todos = signal(getTodos())

function getTodos() {
  const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return []

  return JSON.parse(localValue)
}

effect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos.value))
})

export const completedTodos = computed(() => {
    return todos.value.filter(todo => todo.completed).length
})

export function deleteTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
}

export function toggleTodo(id, completed) {
  todos.value = todos.value.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed }
    }

    return todo
  })
}

export function addTodo(title) {
  todos.value = [
    ...todos.value,
    { id: crypto.randomUUID(), title, completed: false },
  ]
}