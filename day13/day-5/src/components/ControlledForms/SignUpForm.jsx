import { signupSchema } from "../schema/signup.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input placeholder="First Name" {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <input placeholder="Last Name" {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" value="male" {...register("gender")} id="male" />

          <label htmlFor="female">Female</label>
          <input type="radio" value="female" {...register("gender")} id="female" />

          <label htmlFor="other">Other</label>
          <input type="radio" value="other" {...register("gender")} id="other" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;