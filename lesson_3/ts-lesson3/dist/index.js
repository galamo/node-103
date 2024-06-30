"use strict";
async function getHostagesApi() {
    const result = await fetch("http://129.159.129.38:8080/hostages");
    const data = await result.json();
    return data;
}
async function init() {
    const result = await getHostagesApi();
    console.log(result[0].name);
}
