import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  
  return (
    <ul className={classes.ul}>
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
