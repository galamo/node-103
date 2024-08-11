import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()



app.listen(process.env.API_PORT, () => {
    console.log(`Running on PORT: ${process.env.API_PORT}`)
})
