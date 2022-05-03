import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../Redux/TodoSlice";
import classes from "./TodoItem.module.css";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const checkedTodoHandler = () => {
    dispatch(completedTodo({ id, completed: !completed }));
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <motion.li
      key={id}
      className={`${classes.item} ${completed && classes.success}`}
      transition={{ delay: 0.3 }}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className={classes.title_todo}>
        <motion.input
          type="checkbox"
          transition={{ delay: .4 }}
          initial={{ x: 55, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={checkedTodoHandler}
          checked={completed}
        />
        <motion.span
          transition={{ delay: .5 }}
          initial={{ x: 45, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={completed && classes.success_text}
        >
          {title}
        </motion.span>
      </div>

      <motion.button
        className={classes.btn_delete}
        transition={{ delay: .6 }}
        initial={{ x: 55, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={deleteTodoHandler}
      >
        Delete
      </motion.button>
    </motion.li>
  );
};

export default TodoItem;
