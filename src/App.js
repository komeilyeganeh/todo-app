import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="app">
      <motion.h1 className="title" transition={{ delay: .2 }} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Todo List (Redux)</motion.h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
