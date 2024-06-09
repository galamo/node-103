const { getJokes } = require("./getJokesApi")

async function init() {
    const result = await getJokes()
    // call here to the getUserApi

}
init()