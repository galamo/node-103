import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import addRequestId from "./middleware/addRequestId"
dotenv.config()

const app = express()

app.use((req, res, next) => {
    console.log("middleware!!!", req.url)
    next()
})
app.use(addRequestId)

app.get("/transactions", (req: Request, res: Response, next) => {
    // @ts-ignore
    // someParam
    res.status(200).json([{ id: "t1", amount: 5000 }, { id: "t2", amount: 6000 }])
})
app.get("/info", (req: Request, res: Response, next) => {
    res.status(200).json({ message: "ok" })
})
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

    console.log(error.message, res.getHeader("x-request-id"))
    res.status(500).send("Something went wrong!")
})


app.listen(process.env.API_PORT, () => {
    console.log(`Running on PORT: ${process.env.API_PORT}`)
})
