import styled from 'styled-components';

import { useTodosDispatch, Todo } from 'contexts/TodosContext';

export type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();

  const onToggle = (): void => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onDelete = (): void => {
    dispatch({
      type: 'DELETE',
      id: todo.id,
    });
  };

  return (
    <ItemWrapper>
      <ItemDone onClick={onToggle}>
        {todo.done ? 'DONE' : 'In progress'}
      </ItemDone>

      <ItemText textDecoration={todo.done ? 'line-through' : ''}>
        {todo.text}
      </ItemText>

      <ItemDelete onClick={onDelete}>DELETE</ItemDelete>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
  border-radius: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const ItemDone = styled.div`
  width: 15%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const ItemText = styled.div<{ textDecoration: string }>`
  width: 75%;
  font-size: 20px;
  text-decoration: ${(props) => props.textDecoration};
  cursor: not-allowed;
`;

const ItemDelete = styled.div`
  width: 10%;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
