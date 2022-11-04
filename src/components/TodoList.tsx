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
  todos: any;
  onToggle: any;
  onRemove: any;
  onImportant: any;
  setIsEdit: any;
}

const TodoList = ({
  onChangeSelectedTodo,
  todos,
  onToggle,
  onRemove,
  onImportant,
  setIsEdit,
}: Props) => {
  return (
    <TodoListBox>
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onImportant={onImportant}
          setIsEdit={setIsEdit}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </TodoListBox>
  );
};

export default TodoList;
