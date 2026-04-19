import { email, z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(/^S+@S+$/, "Invalid email format"),

  phone: z.string().min(9, "Phone must contain at least 9 numbers"),

  //gender (radio)

  //course (check boxes)
});

//npm install zod @hookform/re-solvers