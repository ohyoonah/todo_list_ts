import { useSelector } from "react-redux";
import { Todos } from "../store/modules/todoSlice";
import { Header } from "../styles/todoHeadStyle";

const TodoHead = () => {
  const todolist = useSelector(({ todo }: any) => todo);
  const today = new Date();
  const task = todolist.filter((todo: Todos) => !todo.checked).length;

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
