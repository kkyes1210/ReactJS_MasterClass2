import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    //좋지 않은 방법, 하나하나 체크할 필요가 없다.
    /* if (category === "TODO")
      return toDos.filter((toDo) => toDo.category === "TODO");
    if (category === "DOING")
      return toDos.filter((toDo) => toDo.category === "DOING");
    if (category === "DONE")
      return toDos.filter((toDo) => toDo.category === "DONE"); */
    return toDos.filter((toDo) => toDo.category === category);
  },
});
