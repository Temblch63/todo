import s from './TodoForm.module.css'
import { useTodoStore } from '../../store/useTodoStore';



const TodoForm = () => {
   const userInput = useTodoStore((state) => state.userInput)
   const setUserInput = useTodoStore((state) => state.setUserInput)
   const addTask = useTodoStore((state) => state.addTask)
   const searchTodo = useTodoStore((state) => state.searchTodo)
   const setSearchTodo = useTodoStore((state) => state.setSearchTodo)
   const deleteAllTasks = useTodoStore((state) => state.deleteAllTasks)

   const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      addTask()
   }

   const handleDeleteAll = () => {
      const answer = prompt('вы точно хотите удалить все задачи?')

      if (answer !== null) {
         deleteAllTasks()
      }
   }

   return (
      <>
         <h1>Todo App</h1>
         <form
            className={s.form}
            onSubmit={handleSubmit}>
            <input
               className={s.input}
               type='text'
               value={userInput}
               placeholder='Введите текст'
               onChange={(e) => setUserInput(e.target.value)}
            />
            <button
               className={s.btn}
            >
               Add
            </button>
         </form>
         <div className={s.searchRow}>
            <input
               className={s.inputFilter}
               type='text'
               value={searchTodo}
            placeholder='Поиск задач'
               onChange={(e) => setSearchTodo(e.target.value)}
            />
            <button
               className={s.btn}
               type='button'
               onClick={handleDeleteAll}
            >
               Delete all
            </button>
         </div>
      </>
   );
}

export default TodoForm;
