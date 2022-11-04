import styled from "styled-components";

const TodoHeadBox = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--black);
  }

  p {
    font-size: 1.2rem;
    margin-top: 15px;
    color: var(--black);
  }

  .task {
    color: var(--blue-gray);
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const TodoHead = ({ task }: any) => {
  const today = new Date();

  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBox>
      <div>
        <h1>{dateString}</h1>
        <p>{dayName}</p>
      </div>
      <div className="task">{task} Tasks</div>
    </TodoHeadBox>
  );
};

export default TodoHead;
