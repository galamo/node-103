async function postNewCar() {
    const result = await fetch(`http://localhost:4500/car`, {
        method: "post"
    })
    const r = await result.text()
    console.log(r)
    return r;

}
for (let index = 0; index < 20; index++) {
    postNewCar()
}