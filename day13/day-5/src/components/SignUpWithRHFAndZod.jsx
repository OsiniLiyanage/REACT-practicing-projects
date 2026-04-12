import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schemas/signupSchema";

function SignUpWithRHFAndZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First Name */}
      <div>
        <input {...register("firstName")} placeholder="First Name" />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      {/* Last Name */}
      <div>
        <input {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <input {...register("phone")} placeholder="Phone Number" />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      {/* Gender */}
      <div>
        <label>
          <input type="radio" value="male" {...register("gender")} />
          Male
        </label>

        <label>
          <input type="radio" value="female" {...register("gender")} />
          Female
        </label>

        <label>
          <input type="radio" value="other" {...register("gender")} />
          Other
        </label>

        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      {/* Course */}
      <div>
        <select {...register("course")}>
          <option value="">Select Course</option>
          <option value="react">React Development</option>
          <option value="node">Node.js</option>
          <option value="devops">DevOps</option>
        </select>

        {errors.course && <p>{errors.course.message}</p>}
      </div>

      {/* Expectations */}
      <div>
        <textarea
          {...register("expectations")}
          placeholder="Your expectations..."
        />
        {errors.expectations && <p>{errors.expectations.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUpWithRHFAndZod;