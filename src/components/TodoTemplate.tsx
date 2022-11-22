import { useState } from "react";
import styled, { css } from "styled-components";
import { Todos } from "../modules/todoSlice";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

const TodoTemplateBox = styled.div`
  width: 512px;
  height: 600px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  position: relative;
  box-shadow: 8px 8px 30px var(--black);
`;

const TodoMainStyle = styled.div<{ isEdit: boolean }>`
  ${({ isEdit }) =>
    isEdit &&
    css`
      opacity: 0.2;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

const TodoTemplate = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState<Todos | null>(null);

  const onChangeSelectedTodo = (todo: Todos) => {
    setNewText(todo);
  };

  return (
    <TodoTemplateBox>
      <TodoMainStyle isEdit={isEdit}>
        <TodoHead />
        <TodoInsert />
        <TodoList
          onChangeSelectedTodo={onChangeSelectedTodo}
          setIsEdit={setIsEdit}
        />
      </TodoMainStyle>
      {isEdit && <TodoEdit setIsEdit={setIsEdit} newText={newText} />}
    </TodoTemplateBox>
  );
};

export default TodoTemplate;
