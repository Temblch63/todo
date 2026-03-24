import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],
      userInput: '',

      setUserInput: (value) => {
        set({ userInput: value })
      },

      addTask: () => {
        const { userInput, todos } = get()

        if (!userInput.trim()) return

        const newTodo = {
          id: Date.now(),
          title: userInput,
          isDone: false
        }

        set({
          todos: [newTodo, ...todos],
          userInput: ''
        })
      },

      deleteTask: (id) => {
        const { todos } = get()

        set({
          todos: todos.filter((todo) => todo.id !== id)
        })
      },

      toggleTodo: (id) => {
        const { todos } = get()

        set({
          todos: todos.map((todo) =>
            todo.id === id
              ? { ...todo, isDone: !todo.isDone }
              : todo
          )
        })
      }
    }),
    {
      name: 'todos-storage'
    }
  )
)