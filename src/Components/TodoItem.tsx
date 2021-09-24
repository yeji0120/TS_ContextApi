import styled from 'styled-components';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <ItemWrapper>
      <ItemDone>DONE</ItemDone>

      <ItemText>{todo.text}</ItemText>

      <ItemDelete>DELETE</ItemDelete>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px 0px 0px;
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

const ItemText = styled.div`
  width: 75%;
  font-size: 20px;
  cursor: not-allowed;
`;

const ItemDelete = styled.div`
  width: 10%;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;
