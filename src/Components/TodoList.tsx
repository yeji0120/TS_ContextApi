import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: 'TypeScript',
      done: true,
    },
    {
      id: 2,
      text: 'Context API',
      done: true,
    },
    {
      id: 3,
      text: 'React',
      done: false,
    },
    {
      id: 4,
      text: 'JavaScript',
      done: false,
    },
    {
      id: 5,
      text: 'Redux',
      done: true,
    },
  ];

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
