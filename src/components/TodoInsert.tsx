import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { onInsert } from "../store/modules/todoSlice";
import { Form, Input, Button } from "../styles/todoInsertStyle";

const TodoInsert = () => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputValue) return;
      dispatch(onInsert(inputValue));
      setInputValue("");
    },
    [inputValue, dispatch]
  );

  const onClick = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {visible && (
        <Input
          autoFocus
          placeholder="할 일 입력 후 Enter"
          value={inputValue}
          onChange={onChange}
        />
      )}
      <Button type="button" onClick={onClick} visible={visible}>
        <MdAdd />
      </Button>
    </Form>
  );
};

export default TodoInsert;
