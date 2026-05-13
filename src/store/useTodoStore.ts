import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Todo = {
   id: number,
   title: string,
   isDone: boolean
}

type TodoStore = {
   todos: Todo [],
   userInput: string,
   searchTodo: string,
   setUserInput: (value: string) => void,
   setSearchTodo: (value: string) => void,
   addTask: () => void,
   deleteTask: (id: number) => void,
   deleteAllTasks: () => void,
   toggleTodo: (id: number) => void
}

export const useTodoStore = create<TodoStore>()(
   persist(
      (set, get) => ({
         todos: [],
         userInput: '',
         searchTodo: '',

         setUserInput: (value) => {
            set({ userInput: value })
         },

         setSearchTodo: (value) => {
            set({ searchTodo: value })
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

         deleteAllTasks: () => {
            set({ todos: [] })
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
