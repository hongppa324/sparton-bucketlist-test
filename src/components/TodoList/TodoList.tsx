import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./styles";
import Todo from "../Todo/Todo";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../axios/api";
import { Todo as TodoType } from "../../types/global.d";

type Props = {
  isActive: boolean;
};

export default function TodoList({ isActive }: Props) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isPending) {
    return <p>로딩 중입니다..!</p>;
  }
  if (isError) {
    return <p>오류가 발생했습니다..!</p>;
  }

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일" : "완료한 일"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {data
          .filter((item: TodoType) => item.isDone === !isActive)
          .map((item: TodoType) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}
