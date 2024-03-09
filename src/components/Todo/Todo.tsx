import { StyledDiv, StyledTitle, StyledContent, TodoButton } from "./styles";
import { removeTodo, switchTodo } from "../../axios/api";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Todo } from "../../types/global.d";

type Props = {
  todo: Todo;
  isActive: boolean;
};

export default function Todo({ todo, isActive }: Props) {
  const queryClient = useQueryClient();
  const removeMutation = useMutation<void, Error, string>({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("목록 제거 오류", error);
    },
  });

  const switchMutation = useMutation<
    void,
    Error,
    { id: string; isDone: boolean }
  >({
    mutationFn: switchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("목록 이동 오류", error);
    },
  });

  const removeHandler = (id: string) => {
    removeMutation.mutate(id);
  };

  const switchHandler = (id: string, isDone: boolean) => {
    switchMutation.mutate({ id, isDone });
  };

  return (
    <StyledDiv>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledContent>{todo.content}</StyledContent>
      <TodoButton onClick={() => switchHandler(todo.id, !isActive)}>
        {isActive ? "완료" : "취소"}
      </TodoButton>
      <TodoButton onClick={() => removeHandler(todo.id)}>삭제</TodoButton>
    </StyledDiv>
  );
}
