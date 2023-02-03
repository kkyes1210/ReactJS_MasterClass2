import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value);
  };
  //console.log(category);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TODO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      {/* {category === "TODO" &&
        toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {category === "DOING" &&
        doing.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
      {category === "DONE" &&
        done.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)} */}
    </div>
  );
}
export default ToDoList;
