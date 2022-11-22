import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { onUpdate } from "../modules/todoSlice";

const EditForm = styled.form`
  background: white;
  width: 70%;
  height: 50%;
  border-radius: 16px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--black);
  box-shadow: 8px 8px 15px var(--black);

  h2 {
    border-radius: 16px 16px 0 0;
    position: absolute;
    top: 0;
    font-size: 1.8rem;
    font-weight: 700;
    background-color: var(--blue-gray);
    width: 100%;
    height: 60px;
    line-height: 60px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 5px solid var(--light-gray);
    width: 80%;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 1rem;
  }

  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    .updateButton {
      font-weight: 700;
      border-radius: 0 0 0 16px;
      cursor: pointer;
      background: var(--blue-gray);
      border: none;
      flex: 1;
      font-size: 1rem;
      &:hover {
        background: var(--light-gray);
      }
    }
    .closeButton {
      font-weight: 700;
      border-radius: 0 0 16px 0;
      cursor: pointer;
      background: var(--blue-gray);
      border: none;
      flex: 1;
      font-size: 1rem;
      &:hover {
        background: var(--light-gray);
      }
    }
  }
`;

interface EditProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  newText: any;
}

const TodoEdit = ({ setIsEdit, newText }: EditProps) => {
  const [inputValue, setInputValue] = useState(newText.text);
  const dispatch = useDispatch();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(onUpdate({ id: newText.id, text: inputValue }));
      setIsEdit(false);
    },
    [dispatch, inputValue, newText.id, setIsEdit]
  );

  return (
    <EditForm onSubmit={onSubmit}>
      <h2>할 일 수정</h2>
      <input value={inputValue} onChange={onChange} autoFocus />
      <div>
        <button className="updateButton" type="submit">
          확인
        </button>
        <button className="closeButton" onClick={() => setIsEdit(false)}>
          닫기
        </button>
      </div>
    </EditForm>
  );
};

export default TodoEdit;
