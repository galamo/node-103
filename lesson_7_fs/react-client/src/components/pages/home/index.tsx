import { Children, ReactNode } from "react"
import { Navigate } from "react-router-dom"



export function Home() {
    return <div>
        <h1>Home</h1>
    </div>
}

export function ClientSideProtector(props: { children: ReactNode }) {
    if (!localStorage.getItem("token")) {
        return <Navigate to={"/login"} />
    } else {
        return props.children
    }
}

