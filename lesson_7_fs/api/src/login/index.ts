import express, { Request, Response } from "express"
import { z, ZodError } from "zod"
const loginRouter = express.Router();
const users = []

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
const registerSchema = z.object({
    userName: z.string().email(),
    fullName: z.string(),
    phone: z.string().max(12),
    password: z.string().regex(passwordRegex),
    yearOfBirth: z.number().optional()
})
type RegisteredUser = z.infer<typeof registerSchema>;





loginRouter.post("/login", (req: Request, res: Response, next) => {
    res.status(200).json({ message: "ok" })
})



loginRouter.post("/register", (req: Request, res: Response, next) => {
    try {
        registerSchema.parse(req.body)
        return res.status(200).json({ message: "ok" })
    } catch (error: any) {
        console.log(error?.errors, res.getHeader("x-request-id"))
        return res.status(400).json({ error: "something went wrong" })
    }

    // if (!userName || !password) return res.status(400).send("Missing user name or password")
    // else {
    //     users.push({ userName, password })
    //     return res.status(200).json({ message: "user registered sababa" })
    // }
})


export { loginRouter }