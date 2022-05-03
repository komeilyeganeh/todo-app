import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../Redux/TodoSlice";
import classes from "./AddTodo.module.css";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
      setValue("");
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <motion.input
        type="text"
        placeholder="Add task..."
        className={classes.input}
        transition={{ delay: 0.4 }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onChange={(event) => setValue(event.target.value)}
        value={value}
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
