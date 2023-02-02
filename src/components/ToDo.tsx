import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //console.log("i wanna go ", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
  };

  /* const onClick = (newCategory: IToDo["category"]) => {
    console.log("I wanna to ", newCategory);
  }; */

  return (
    <li>
      <span>{text}</span>
      {/*  {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )} */}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
