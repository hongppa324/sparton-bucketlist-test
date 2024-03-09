import Input from "../components/Input/Input";
import TodoList from "../components/TodoList/TodoList";

export default function Home() {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}
