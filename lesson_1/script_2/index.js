const { getJokes } = require("./getJokesApi")
const { getUserApi } = require("./getUserApi")
const { logger } = require("./logger")

async function init() {
    logger("Start init")
    try {
        const result = await getJokes()
        logger("Jokes api response success")
        const result2 = await getUserApi()
        logger("randomUsers api response success")
        logger("results" + result.length + " " + result2.results.length)
    } catch (error) {
        console.log(error)
    }
    logger("Finish init")
}
init()