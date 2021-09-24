import React, { createContext, Dispatch, useReducer, useContext } from 'react';

// 상태 전용 context, 디스패치 전용 context
// TodoForm Component처럼 상태는 필요하지 않고 디스패치 함수만 필요한 Component들이
// 불필요한 리랜더링을 하지 않도록 두 개로 관리

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// 상태 전용 context
// provider를 사용하지 않았을 때 context의 값이 undefined가 되기 때문
type TodosState = Todo[];
const TodosStateContext = createContext<TodosState | undefined>(undefined);

// CREATE = 새로운 항목 생성 | TOGGLE = done 값 반전 | DELETE = 항목 제거
type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number };

// Dispatch
// action type을 넣어주면 나중에 Component에서 action들에 대한 type을 검사할 수 있음
// action에 추가적으로 필요한 값이 빠지면 오류 발생
type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

//Reducer
const TodosReducer = (state: TodosState, action: Action) => {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });

    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error('Unhandled action');
  }
};

// Provider
// App에서 불러와 기존 내용을 감싸줘야하기 때문에 내보냄
// context의 value를 변경하는 역할
// value는 필수 값, 전달받는 Component의 수는 제한없음
export const TodosContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [상태, dispatch함수] = useReducer(reducer함수, 초기상태);
  const [todos, dispatch] = useReducer(TodosReducer, [
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
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
};

// todos의 타입은 두 개중 하나가 될 수 있기 때문에 매번 확인이 필요
// 전용 Hooks를 만들어 디스패치를 더 편하게 이용하고
// Component에서 사용 시 유효성 검사도 생략 가능
export const useTodosState = (): TodosState => {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
};

export const useTodosDispatch = (): TodosDispatch => {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
};
