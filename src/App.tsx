import s from './App.module.css'
import  TodoForm  from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';


function App() {

  return (
    <div className={s.app}>
      <div className={s.todoPanel}>
      <TodoForm />
      <TodoList />
      </div>
    </div>
  )
}

export default App
