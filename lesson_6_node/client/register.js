async function registerUser() {
    const result = await fetch(`http://localhost:3600/auth/register`, {
        method: "post",
        body: JSON.stringify({ userName: "michal@gmail.com", password: "manaHama" }),
        headers: { "content-type": "application/json" }
    })
    const r = await result.json()
    console.log(r)
    return r;

}
registerUser()
