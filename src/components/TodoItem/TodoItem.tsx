import s from './TodoItem.module.css'
import { useTodoStore } from '../../store/useTodoStore';
import { Todo } from '../../store/useTodoStore';
import { FC } from 'react';

type TodoItemProps = {
   todo: Todo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
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
        className={s.title}
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


