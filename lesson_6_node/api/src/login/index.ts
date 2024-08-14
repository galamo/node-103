import express, { Request, Response } from "express"

const loginRouter = express.Router();
const users = []

loginRouter.post("/login", (req: Request, res: Response, next) => {
    res.status(200).json({ message: "ok" })
})

loginRouter.post("/register", (req: Request, res: Response, next) => {
    const { userName, password } = req.body
    if (!userName || !password) return res.status(400).send("Missing user name or password")
    else {
        users.push({ userName, password })
        return res.status(200).json({ message: "user registered sababa" })
    }
})


export { loginRouter }