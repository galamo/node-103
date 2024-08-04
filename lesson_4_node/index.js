const express = require("express")

const app = express()

app.get("/test", (request, response, next) => {
    console.log(request.ip)

    return response.send("All Good!")

})



app.listen(3500, () => {
    console.log("Listening to PORT, API Is working")
})

