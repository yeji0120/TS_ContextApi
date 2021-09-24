import styled from 'styled-components';

import TodoItem from './TodoItem';
import { useTodosState } from 'contexts/TodosContext';

const TodoList = () => {
  const todos = useTodosState();

  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListWrapper = styled.ul`
  width: 70%;
  margin: 0 auto;
`;
