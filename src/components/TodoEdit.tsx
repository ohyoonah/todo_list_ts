import { useState, useCallback, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { onUpdate } from "../store/modules/todoSlice";
import { Form, Overlay } from "../styles/todoEditStyle";

interface EditProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  newText: any;
}

const TodoEdit = ({ setIsEdit, newText }: EditProps) => {
  const { id, text } = newText;
  const [inputValue, setInputValue] = useState(text);
  const dispatch = useDispatch();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(onUpdate({ id: id, text: inputValue }));
      setIsEdit(false);
    },
    [dispatch, inputValue, id, setIsEdit]
  );

  return (
    <>
      <Overlay />
      <Form onSubmit={onSubmit}>
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
      </Form>
    </>
  );
};

export default TodoEdit;
