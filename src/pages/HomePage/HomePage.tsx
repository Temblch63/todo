import s from "./HomePage.module.css";
import TodoForm  from "../../components/TodoForm/TodoForm";
import  {TodoList}  from "../../components/TodoList/TodoList";


export function HomePage() {
   return (
      <div className={s.app}>
         <div className={s.todoPanel}>
            <TodoForm />
            <TodoList />
         </div>
      </div>
   )
}
