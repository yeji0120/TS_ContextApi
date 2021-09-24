import TodoForm from 'Components/TodoForm';
import TodoList from 'Components/TodoList';
import { TodosContextProvider } from 'contexts/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;
