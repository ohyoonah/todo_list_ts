import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBox = styled.div`
  overflow-y: auto;
  height: 100vh;
  margin-top: 3rem;
  padding: 0 3rem;
`;

interface Props {
  onChangeSelectedTodo: any;
  setIsEdit: any;
}

const TodoList = ({ onChangeSelectedTodo, setIsEdit }: Props) => {
  const todolist = useSelector(({ todo }: any) => todo);
  return (
    <TodoListBox>
      {todolist.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChangeSelectedTodo={onChangeSelectedTodo}
          setIsEdit={setIsEdit}
        />
      ))}
    </TodoListBox>
  );
};

export default TodoList;
