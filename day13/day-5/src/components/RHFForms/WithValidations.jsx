import React from "react";
import { useForm } from "react-hook-form";

function WithValidations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const submit = (data) => {
    console.log(data);
    // reset()
  };

  const em = watch("email");
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register("email", {
            required: "Please enter the email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "please enter password",
            minLength: {
              value: 6,
              message: "enter 6 characters",
            },
          })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <h3>Live : {em}</h3>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WithValidations;
