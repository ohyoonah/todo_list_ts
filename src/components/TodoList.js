import styled from "styled-components";
import TodoItem from "./TodoItem.js";

const TodoListBox = styled.div`
  overflow-y: auto;
  height: 100vh;
  margin-top: 3rem;
  padding: 0 3rem;
`;

const TodoList = ({
  onChangeSelectedTodo,
  todos,
  onToggle,
  onRemove,
  onImportant,
  setIsEdit,
}) => {
  return (
    <TodoListBox>
      {todos.map((todo) => (
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
