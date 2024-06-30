"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSingleHostageByName() {
    return { name: "", age: "11", image: "" };
}
function getUser(prefix) {
    return prefix + "userName";
}
var CarColors;
(function (CarColors) {
    CarColors["Red"] = "red";
    CarColors["Blue"] = "blue";
    CarColors["Yellow"] = "yellow";
})(CarColors || (CarColors = {}));
function getCar(c) {
    let car = {
        lp: "4545-a-f-3", company: "Subaro", seats: 5, year: 2017, color: CarColors.Red
    };
    return car;
}
async function getCarsApi() {
    const result = await fetch("api");
    const data = await result.json();
    return data;
}
async function init() {
    const result = await getCarsApi();
}
let globalUser = "this is global user";
function changeGlobalUser() {
    globalUser = "Eliyahu";
}
changeGlobalUser();
