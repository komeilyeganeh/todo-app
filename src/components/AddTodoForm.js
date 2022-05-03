import { motion } from "framer-motion";
import classes from "./AddTodo.module.css";

const AddTodoForm = () => {
  return (
    <form className={classes.form}>
      <motion.input
        type="text"
        placeholder="Add task..."
        className={classes.input}
        transition={{ delay: 0.4 }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      />
      <motion.button
        type="submit"
        className={classes.btn_submit}
        transition={{ delay: 0.6 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Add
      </motion.button>
    </form>
  );
};

export default AddTodoForm;
