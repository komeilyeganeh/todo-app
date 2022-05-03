import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  const todosLength = todos.length;

  return (
    <div className="app">
      <motion.h1
        className="title"
        transition={{ delay: 0.2 }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Todo List (Redux)
      </motion.h1>
      <motion.p
        className="length_task"
        transition={{ delay: 0.3 }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Tasks : {todosLength}
      </motion.p>
      <AddTodoForm />
      {todosLength > 0 ? (
        <TodoList />
      ) : (
        <motion.div
          className="not_found"
          transition={{ delay: 0.6 }}
          initial={{ y: 55, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          The list is empty!
        </motion.div>
      )}
    </div>
  );
}

export default App;
