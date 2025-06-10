import z from "zod";
import { signupFormSchema } from "../schemas/signupFormSchema";

export type SignupFormType = z.infer<typeof signupFormSchema>;