const express = require("express")
const { logger } = require("./logger")
const fs = require("node:fs")

const app = express()

let messages = [];

function loadMessagesFromFile() {
    fs.readFile("./log.txt", "utf8", (err, data) => {
        if (err) { console.log("error") }
        messages = data.split("\n")
    })
}
loadMessagesFromFile()


app.get("/message", (req, res, next) => {

    const message = req?.query?.message;
    messages.push(message)
    logger(message)
    res.json(messages)

})

app.post("/car", (req, res, next) => {
    console.log("post car request...")
    res.send("POST!")
})

app.listen(4500)


// error handling
// http method
// middleware
// TS 