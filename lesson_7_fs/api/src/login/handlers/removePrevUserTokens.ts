import { tokens } from "..";

export function removePrevUserTokens(userName: string) {
    for (const sessionKey in tokens) {
        const value = tokens[sessionKey]
        if (value.user.userName.toLowerCase() === userName.toLowerCase()){
            delete tokens[sessionKey]
        }

    }
}