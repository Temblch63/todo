import './App.css'
import  TodoForm  from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';


function App() {

  return (
    <div 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column',
      marginTop: '20px'
    }}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
      <TodoForm
        // onSubmit={handleSubmit}
        // value={userInput}
        // placeholder='введите текст'
        // onChange={(e) => setUserInput(e.target.value)}
        // onAdd={addTask}
      />
      <TodoList
        // todos={todos}
        // onToggle={toggleTodo}
        // onDelete={deleteTask}
      />
      </div>
    </div>
  )
}

export default App
