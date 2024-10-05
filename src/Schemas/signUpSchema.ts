import {z} from 'zod'
 
export const usernameValidation = z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(16, "Username should be no more than 16 characters")
    .regex(/^[a-zA-Z0-9]{4,16}$/, "Username must not contain special characters")
     
export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})