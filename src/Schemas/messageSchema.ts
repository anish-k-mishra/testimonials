import {z} from 'zod'

export const messageSchema = z.object({
    content: z.string().min(10, {message: "Content should be minimum 10 characters"})
        .max(300, "Cotent must not be more than 300 characters")
})