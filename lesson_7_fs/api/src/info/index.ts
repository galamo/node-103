import express, { Request, Response } from "express"

const infoRouter = express.Router();

infoRouter.get("/info", (req: Request, res: Response, next) => {
    res.status(200).json({ message: "Bank account: 123456789" })
})

export { infoRouter }