import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import styled from "styled-components";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }
    return (
    <StListContainer key={todo.id}>
      <h2>Working...</h2>
      <StListWrapper>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      </StListWrapper>
    </StListContainer>
  );
};

export default TodoListContainer;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
