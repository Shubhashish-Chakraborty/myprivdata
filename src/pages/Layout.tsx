import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Layout = () => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer/>   
            </div>
        </>
    )
}