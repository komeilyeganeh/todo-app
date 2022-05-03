import { motion } from "framer-motion";
import classes from "./TodoItem.module.css";

const TodoItem = ({ id, title, completed }) => {
  return (
    <motion.li
      key={id}
      className={classes.item}
      transition={{ delay: 0.8 }}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className={classes.title_todo}>
        <motion.input
          type="checkbox"
          transition={{ delay: 1 }}
          initial={{ x: 55, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        />
        <motion.span
          transition={{ delay: 1.1 }}
          initial={{ x: 45, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {title}
        </motion.span>
      </div>

      <motion.button
        className={classes.btn_delete}
        transition={{ delay: 1.2 }}
        initial={{ x: 55, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        Delete
      </motion.button>
    </motion.li>
  );
};

export default TodoItem;
