import { z, ZodString } from "zod";

const errorMessage = "Invalid Email"
export const emailValidator: ZodString = z
  .string()
  .min(1, { message: errorMessage})
  .email(errorMessage);
