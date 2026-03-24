import s from './TodoForm.module.css'
import { useTodoStore } from '../../store/todoStore';

 const TodoForm = () => {
  const userInput = useTodoStore((state) => state.userInput)
  const setUserInput = useTodoStore((state) => state.setUserInput)
  const addTask = useTodoStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask()
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
          onClick={addTask}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;