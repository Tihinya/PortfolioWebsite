import React from "react"
import Header from "../components/header/Header"
import Home from "../components/home/Home"

export default function MainPage() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
            </main>
        </>
    )
}
