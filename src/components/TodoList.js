import { useSelector, useDispatch } from "react-redux";
import * as todoActions from "./store/todoActions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const toggehandler = (event) => {
    const id = Number(event.target.dataset.id);
    dispatch(todoActions.toggle(id));
  };
  return (
    <ul className="todos">
      {console.log(todos)}
      {todos.map((todo) => (
        <li class={`todos__item todos__item_${todo.completed && "checked"}`}>
          <input
            type="checkbox"
            data-id={todo.id}
            checked={todo.completed}
            onClick={toggehandler}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
