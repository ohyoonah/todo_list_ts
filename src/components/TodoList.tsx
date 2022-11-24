import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { List } from "../styles/todoListStyle";
import { Todos } from "../store/modules/todoSlice";
import { RootState } from "../store";

interface Props {
  onChangeSelectedTodo: (todo: Todos) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const TodoList = ({ onChangeSelectedTodo, setIsEdit }: Props) => {
  const todolist = useSelector(({ todo }: RootState) => todo);

  return (
    <List>
      {todolist.map((todo: Todos) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChangeSelectedTodo={onChangeSelectedTodo}
          setIsEdit={setIsEdit}
        />
      ))}
    </List>
  );
};

export default TodoList;
