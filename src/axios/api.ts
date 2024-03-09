// import api from "./api";
import axios from "axios";
import { Todo } from "../types/global.d";

const SERVER_URL = "http://localhost:4001";

const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.get<Todo[]>(`${SERVER_URL}/todos`);
    console.log("목록 불러오기 성공", response.data);
    return response.data;
  } catch (error) {
    console.error("목록 불러오기 오류", error);
    throw error;
  }
};

const addTodo = async (newTodo: Todo): Promise<void> => {
  try {
    const response = await axios.post(`${SERVER_URL}/todos`, newTodo);
    console.log("목록 추가 성공", response.data);
    return response.data;
  } catch (error) {
    console.error("목록 추가 오류", error);
    throw error;
  }
};

const removeTodo = async (id: string): Promise<void> => {
  try {
    const response = await axios.delete(`${SERVER_URL}/todos/${id}`);
    console.log("목록 제거 성공", response.data);
    return response.data;
  } catch (error) {
    console.error("목록 제거 오류", error);
    throw error;
  }
};

const switchTodo = async ({
  id,
  isDone,
}: {
  id: string;
  isDone: boolean;
}): Promise<void> => {
  try {
    const response = await axios.patch(`${SERVER_URL}/todos/${id}`, {
      isDone: !isDone,
    });
    console.log("목록 이동 성공", response.data);
    return response.data;
  } catch (error) {
    console.error("목록 이동 오류", error);
    throw error;
  }
};

export { getTodos, addTodo, removeTodo, switchTodo };
