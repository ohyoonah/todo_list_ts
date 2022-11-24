import { useSelector } from "react-redux";
import { Header } from "../styles/todoHeadStyle";
import { Todos } from "../store/modules/todoSlice";
import { RootState } from "../store";

const TodoHead = () => {
  const todolist = useSelector(({ todo }: RootState) => todo);
  const task = todolist.filter((todo: Todos) => !todo.checked).length;
  const today = new Date();

  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <Header>
      <div>
        <h1>{dateString}</h1>
        <p>{dayName}</p>
      </div>
      <div className="task">{task} Tasks</div>
    </Header>
  );
};

export default TodoHead;
