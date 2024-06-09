async function getJokes() {
    const result = await fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    const r = await result.json()
    return r;
}

module.exports = { getJokes }