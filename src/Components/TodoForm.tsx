import { useState } from 'react';
import styled from 'styled-components';

import { useTodosDispatch } from 'contexts/TodosContext';

const TodoForm = () => {
  const dispatch = useTodosDispatch();
  const [value, setValue] = useState<string>('');

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <TodoFormContainer>
      <TodoFormWrapper onSubmit={onSubmit}>
        <TodoInput
          type="text"
          value={value}
          placeholder="할 일을 추가해 주세요."
          onChange={(event) => setValue(event.target.value)}
        />

        <TodoAddButton>등록</TodoAddButton>
      </TodoFormWrapper>
    </TodoFormContainer>
  );
};

export default TodoForm;

const TodoFormContainer = styled.section`
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  padding: 20px;
`;

const TodoFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 15px;
`;

const TodoAddButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
`;
