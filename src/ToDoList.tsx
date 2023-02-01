import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  //console.log(register("toDo")); //객체를 반환해준다.
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
