const fs = require("node:fs")
async function init() {
    try {
        console.log("==============Before===============")
        await showFolderFiles("./")
        await deleteFile("b.txt")
        console.log("==============After===============")
        await showFolderFiles("./")
    } catch (error) {
        console.log(error)
    }
}
init()
init()

async function deleteFile(file) {
    return new Promise((res, rej) => {
        fs.unlink(file, (err) => {
            if (err) {
                rej(err)
            } else {
                res()
            }
        })
    })
}
async function showFolderFiles(directoryPath) {
    return new Promise((res, rej) => {
        fs.readdir(directoryPath, (err, data) => {
            if (err) {
                rej(err)
            } else {
                data.forEach(file => console.log(file))
                res()
            }
        })
    })
}




