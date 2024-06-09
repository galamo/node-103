const { getJokes } = require("./getJokesApi")

async function init() {
    const result = await getJokes()

}
init()