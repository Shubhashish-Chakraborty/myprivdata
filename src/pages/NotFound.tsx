import { Redirect } from "../icons/others/Redirect"
import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate();
    return(
        
        <div className="flex items-center justify-center bg-custom-1 mt-24">
            <div>
                <div className="animate-bounce">
                    <svg fill="currentColor" stroke="currentColor" className="size-80 text-red-500 hover:text-red-900 cursor-pointer transition-all duration-500 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                    </svg>
                </div>
                <div className="font-bold text-4xl text-center text-red-400">
                    Page Not Found
                </div>
                <div onClick={() => {
                    navigate('/')
                }} className="text-blue-500 hover:underline font-semibold flex justify-center mt-10 text-2xl cursor-pointer">
                    Go to HomePage <Redirect/>
                </div>
            </div>
        </div>

    )
}