import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Todos } from "../store/modules/todoSlice";
import { onChecked, onImportant, onRemove } from "../store/modules/todoSlice";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineStarOutline,
  MdOutlineStar,
  MdModeEditOutline,
} from "react-icons/md";
import {
  ItemBlock,
  ImportantButton,
  EditButton,
  RemoveButton,
} from "../styles/todoListStyle";

interface Props {
  onChangeSelectedTodo: (todo: Todos) => void;
  todo: Todos;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const TodoItem = ({ todo, onChangeSelectedTodo, setIsEdit }: Props) => {
  const { id, text, checked, important } = todo;
  const dispatch = useDispatch();

  return (
    <ItemBlock important={important}>
      <div className="checkBox" onClick={() => dispatch(onChecked(id))}>
        {checked ? (
          <>
            <MdCheckBox className="check" />
            <span className="itemCheckText">{text}</span>
          </>
        ) : (
          <>
            <MdCheckBoxOutlineBlank />
            <span className="itemText">{text}</span>
          </>
        )}
      </div>
      <ImportantButton onClick={() => dispatch(onImportant(id))}>
        {important ? <MdOutlineStar /> : <MdOutlineStarOutline />}
      </ImportantButton>
      <EditButton
        onClick={() => {
          onChangeSelectedTodo(todo);
          setIsEdit(true);
        }}
      >
        <MdModeEditOutline />
      </EditButton>
      <RemoveButton>
        <MdRemoveCircleOutline onClick={() => dispatch(onRemove(id))} />
      </RemoveButton>
    </ItemBlock>
  );
};

export default TodoItem;
