import { useState } from "react";
import { Todos } from "../store/modules/todoSlice";
import TodoHead from "./TodoHead";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import { Wapper, TodosBlock } from "../styles/todoTemplateStyle";

const TodoTemplate = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState<Todos | null>(null);

  const onChangeSelectedTodo = (todo: Todos | null) => {
    setNewText(todo);
  };

  console.log(newText);
  return (
    <Wapper>
      <TodosBlock isEdit={isEdit}>
        <TodoHead />
        <TodoInsert />
        <TodoList
          onChangeSelectedTodo={onChangeSelectedTodo}
          setIsEdit={setIsEdit}
        />
      </TodosBlock>
      {isEdit && <TodoEdit setIsEdit={setIsEdit} newText={newText} />}
    </Wapper>
  );
};

export default TodoTemplate;
