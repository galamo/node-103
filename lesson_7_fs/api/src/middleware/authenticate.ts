import express, { NextFunction, Request, Response } from "express"
import { tokens } from "../login";

export default function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = getTokenFromHeaders(req)
    if (tokens[token]) {
        next()
    } else {
        res.status(401).json({ message: "Unauthorized!" })
    }
}

function getTokenFromHeaders(req: any) {
    return req.headers.authorization as string
}
