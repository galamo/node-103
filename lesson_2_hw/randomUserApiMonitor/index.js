const { logger } = require("./logger")

async function getUserApi() {
    const result = await fetch(`https://randomuser.me/api/`)
    console.log(result.status, result.statusText)
    return result.status + " " + result.statusText
}

async function getJokesApi() {
    const result = await fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    console.log(result.status, result.statusText)
    return result.status + " " + result.statusText
}

function init() {
    setInterval(async () => {
        const result1 = await getUserApi()
        logger(` - [random-users-api] - [${result1}]`, "random-users-api")

        const result2 = await getJokesApi()
        logger(` - [jokes-api] - [${result2}]`, "jokes-api")
    }, 5000);
}

init()



