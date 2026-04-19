//react hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//zod
import { email, z } from "zod";

function ZodoForm() {
  //zod
  const schema = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  //rhf
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input {...register("password")} placeholder="password" />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          {...register("confirmPassword")}
          placeholder="confirm password"
        />
         {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ZodoForm;
