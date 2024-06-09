const user = { name: "michal", lastName: "miles" }
const user2 = { name: "eliyahu", lastName: "david" }
let i = 0;
i++

setTimeout(() => {
    console.log(user, user2, i)
}, 15000);