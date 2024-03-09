import { useState } from "react";
import shortid from "shortid";
import { StyledDiv, StyledImage } from "./styles";
import { addTodo } from "../../axios/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LabeledInput from "../common/LabeledInput";

export default function Input() {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("목록 추가 오류", error);
    },
  });

  const [content, setContent] = useState("");

  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content) {
      alert("제목과 내용을 입력해주세요!");
    }

    const newTodo = {
      id: shortid.generate(),
      content,
      isDone: false,
    };
    addMutation.mutate(newTodo);
    setContent("");
  };

  return (
    <StyledDiv>
      <form onSubmit={onSubmitHandler}>
        <LabeledInput
          id="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentChangeHandler}
        />
        <StyledImage />
      </form>
    </StyledDiv>
  );
}
