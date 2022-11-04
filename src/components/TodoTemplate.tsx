import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
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
  const [todos, setTodos] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(null);

  function getLocalStorage() {
    let todos = localStorage.getItem("todos");
    if (todos) {
      return (todos = JSON.parse(localStorage.getItem("todos") || "[]"));
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChangeSelectedTodo = (todo: any) => {
    setNewText(todo);
  };

  const nextId = useRef(0);

  const onInsert = (text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      important: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onToggle = (id: number) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const onImportant = (id: number) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  const onUpdate = (id: number, text: string) => {
    setTodos(
      todos.map((todo: any) => (todo.id === id ? { ...todo, text } : todo))
    );
    setIsEdit(false);
  };

  const task = todos.filter((todo: any) => !todo.checked).length;

  return (
    <TodoTemplateBox>
      <TodoMainStyle isEdit={isEdit}>
        <TodoHead task={task} />
        <TodoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onImportant={onImportant}
          setIsEdit={setIsEdit}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      </TodoMainStyle>
      {isEdit && (
        <TodoEdit setIsEdit={setIsEdit} newText={newText} onUpdate={onUpdate} />
      )}
    </TodoTemplateBox>
  );
};

export default TodoTemplate;
