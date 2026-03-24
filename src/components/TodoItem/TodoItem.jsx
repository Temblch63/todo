import s from './TodoItem.module.css'
import { useTodoStore } from '../../store/todoStore';

export const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTask = useTodoStore((state) => state.deleteTask)

  return (
    <li
      className={s.item}
    >
      <span 
      className={s.toggle}
        onClick={() => toggleTodo(todo.id)}
      >
        ✔️
      </span>
      <span
        style={{
          textDecoration: todo.isDone ? 'line-through' : 'none',
          opacity: todo.isDone ? 0.5 : 1
        }}
      >
      {todo.title}
      </span>
      <button
        className={s.btn}
        onClick={() => deleteTask(todo.id)}
      >Delete
      </button>
    </li>
  );
}


