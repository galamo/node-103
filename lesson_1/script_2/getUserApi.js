async function getUserApi() {
    const result = await fetch(`https://randomuser.me/api/`)
    const r = await result.json()
    return r;
}

module.exports = { getUserApi }