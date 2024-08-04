const express = require("express")

const app = express()

app.get("/test", (request, response, next) => {
    console.log(request.ip)
    return response.send("All Good!")
})


const users = [{ user: "adi", pass: "abc123" },
{ user: "orel", pass: "aaabbb" },
{ user: "michal", pass: "manahama" }]

app.get("/users", (req, res, next) => {
    return res.json(users.map(u => u.user))
})

app.get("/user-exist", (req, res, next) => {
    console.log(req.query.user)
    // http://127.0.0.1:3500/user-exist?user=adi
    //check if the user exist or not!?
})

app.listen(3500, () => {
    console.log("Listening to PORT, API Is working 3500")
})

