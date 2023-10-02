import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import Todo from './models/todo';
import TodosContextProvider from './store/todos.context';

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
