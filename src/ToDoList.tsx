import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Password ar not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server offline." });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Write here",
            /* validate: (value) =>
              value.includes("tony") ? "no tony allowed" : true, */
            validate: {
              noTony: (value) =>
                value.includes("tony") ? "no tony allowed" : true,
              noKang: (value) =>
                value.includes("kang") ? "no kang allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "Write here", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password1", { required: "Write here", minLength: 5 })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password2"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
