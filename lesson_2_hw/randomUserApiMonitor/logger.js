const fs = require("node:fs")

function logger(msg, fileName) {
    const currentTime = new Date().toLocaleString()
    fs.appendFile(`monitor-${fileName}.txt`, `[${currentTime}] ${msg}\n`, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("write success")
        }
    })
}

module.exports = { logger }
