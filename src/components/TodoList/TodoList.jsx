import { TodoItem } from '../TodoItem/TodoItem';
import { useTodoStore } from '../../store/todoStore';
import s from './TodoList.module.css'


export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos)

  return (
    <ul
      className={s.todoList}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

