import express, { NextFunction, Request, Response } from "express"
import { tokens } from "../login";

const { SESSION_EXPIRATION = 30000 } = process.env

export default function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = getTokenFromHeaders(req)
    const tokenObj = tokens[token];
    if (tokenObj && new Date(tokenObj.currentTimeStamp).getTime() + Number(SESSION_EXPIRATION) > new Date().getTime()) {
        next()
    } else {
        res.status(401).json({ message: "Unauthorized!" })
    }
}

export function getTokenFromHeaders(req: any) {
    return req.headers.authorization as string
}
