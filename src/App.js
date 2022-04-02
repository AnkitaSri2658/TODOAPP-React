import "./App.css";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
