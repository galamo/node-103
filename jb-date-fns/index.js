console.log("i am a module?")
function convertDateToLocalTime(date) {
    return new Date(date).toLocaleString()
}

module.exports = { convertDateToLocalTime } 