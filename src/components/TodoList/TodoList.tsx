import { TodoItem } from '../TodoItem/TodoItem';
import { useTodoStore } from '../../store/useTodoStore';
import s from './TodoList.module.css'


export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos)
  const searchTodo = useTodoStore((state) => state.searchTodo)

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase().trim())
  )

  return (
    <ul
      className={s.todoList}
    >
      
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

