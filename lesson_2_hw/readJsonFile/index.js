const fs = require("node:fs")

function myScriptForReadingAJson(path) {
    const start = new Date().getTime()
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log("Am i here ? ")
            console.log(err)

        } else {
            const end = new Date().getTime()
            console.log(`Countries: ${JSON.parse(data).length}`)
            console.log(end - start)
        }
    })
}
myScriptForReadingAJson("./index_long.json")


