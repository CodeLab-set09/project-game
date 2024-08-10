import { z } from "zod";

export const FormDataSchema = z.object({
  token: z
    .string()
    .min(1, "Please insert the Token recieved ")
    .max(6, "Token shouldn't be greater than 6 characters"),
  password: z.string().min(1, "password is required"),
  confirmPassword: z.string().min(1, "password is required"),
});
