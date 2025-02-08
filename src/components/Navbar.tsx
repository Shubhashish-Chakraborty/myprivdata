import { Button } from "./ui/Button";
import { Login } from "../icons/NavbarIcons/Login";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-navbarBg sticky top-0 gap-5 z-50 backdrop-blur-lg flex flex-col md:flex-row justify-between items-center px-4 py-4 md:px-16 md:py-8">
            {/* Logo Section */}
            <div
                className="cursor-pointer hover:scale-110 transition-all duration-500"
                onClick={() => {
                    navigate('/')
                }}
            >
                <img
                    src="myPrivData_Logo.png"
                    className="w-28 text-white md:w-36 lg:w-48"
                    alt="TheShortLinkLogo"
                />
            </div>

            <div>
                <Button text="LogIn" variant="primary" startIcon={<Login/>}/>
            </div>
        </div>
    );
};