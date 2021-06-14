import React from "react";
import styled from "styled-components";
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undonetodos = todos.filter(todo => !todo.done); //이렇게 하면 done이 false인 애들만 가져오겠지?
  return (
    <TodoHeadBlock>
      <h1>2021년 1월 17일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">할 일 {undonetodos.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
