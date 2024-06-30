import data from "./index.json"

type SingleHostage = typeof data[0]


function getSingleHostageByName(): SingleHostage {
    return { name: "", age: "11", image: "" }
}


function getUser(prefix: string): string {
    return prefix + "userName"
}
enum CarColors {
    Red = "red",
    Blue = "blue",
    Yellow = "yellow"
}
type CarType = {
    lp: string,
    company: string,
    seats: number,
    year: number,
    color: CarColors,
    startEngineButton?: boolean
}
function getCar(c: CarType): CarType {
    let car: CarType = {
        lp: "4545-a-f-3", company: "Subaro", seats: 5, year: 2017, color: CarColors.Red
    }
    return car;
}


async function getCarsApi(): Promise<CarType[]> {
    const result = await fetch("api");
    const data = await result.json()
    return data
}

type ArrayOFCars = Awaited<ReturnType<typeof getCarsApi>>


async function init() {
    const result = await getCarsApi()
}