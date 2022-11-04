import { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const InsertForm = styled.form`
  display: flex;
`;

const InsertInput = styled.input`
  background: var(--light-gray);
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  &::placeholder {
    color: white;
  }
`;

const AddButton = styled.button`
  background: var(--blue);
  border: none;
  outline: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: white;
  font-size: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.7rem;
  top: 6rem;
  cursor: pointer;
  transition: 0.125s all ease-in;

  &:hover {
    background: var(--blue-gray);
  }

  &:active {
    background: var(--red);
    transform: rotate(50deg);
  }

  ${({ visible }) =>
    visible &&
    css`
      background: var(--red);
      transform: rotate(45deg);
      &:hover {
        background: var(--light-red);
      }
    `}
`;

const TodoInsert = ({ onInsert }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onInsert(inputValue);
    setInputValue("");
  };

  const onClick = () => {
    setVisible(!visible);
  };

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <InsertForm onSubmit={handleSubmit}>
      {visible && (
        <InsertInput
          autoFocus
          placeholder="할 일 입력 후 Enter"
          value={inputValue}
          onChange={onChange}
        />
      )}
      <AddButton type="button" onClick={onClick} visible={visible}>
        <MdAdd />
      </AddButton>
    </InsertForm>
  );
};

export default TodoInsert;
