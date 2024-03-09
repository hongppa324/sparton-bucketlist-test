import { useState } from "react";
import shortid from "shortid";
import { StyledDiv, StyledButton } from "./styles";
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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요!");
    }

    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    addMutation.mutate(newTodo);
    setTitle("");
    setContent("");
  };

  return (
    <StyledDiv>
      <form onSubmit={onSubmitHandler}>
        <LabeledInput
          id="title"
          label="제목"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={titleChangeHandler}
        />
        <LabeledInput
          id="content"
          label="내용"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={contentChangeHandler}
        />
        <StyledButton type="submit">추가하기</StyledButton>
      </form>
    </StyledDiv>
  );
}
