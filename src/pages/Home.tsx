import { Button } from "../components/ui/Button"
import { Login } from "../icons/NavbarIcons/Login"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-5 text-center font-extrabold p-6">
            <div className="animate-bounce text-white text-xl md:text-6xl">
                HomePage Launching Soon!!
            </div>
            <div className="flex justify-center mt-10">
                <Button onClick={() => {navigate('dashboard')}} endIcon={<Login/>} variant="other" text="Dashboard"/>
            </div>
        </div>
    )
}