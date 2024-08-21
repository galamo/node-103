import axios from "axios"

export type FullUser = {
    userName: string,
    password: string,
    phone: string,
    fullName: string,
    yearOfBirth?: number
}
const BASE_URL = `http://localhost:3600`

export async function getTransactionsApi(): Promise<Array<{ id: string, amount: number }>> {
    const result = await axios.get(`${BASE_URL}/account/transactions?token=${localStorage.getItem("token")}`,
        { headers: { "content-type": "application/json" } })
    return result.data
}