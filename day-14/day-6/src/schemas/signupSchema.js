// schemas/signupSchema.js
import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email"),

  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),

  gender: z.string().min(1, "Please select a gender"),

  course: z.string().min(1, "Please select a course"),

  expectations: z
    .string()
    .min(10, "Please write at least 10 characters"),
});