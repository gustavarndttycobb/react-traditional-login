import z from "zod";
import { loginFormSchema } from "../schemas/loginFormSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;