import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Login } from "../icons/NavbarIcons/Login";
import { useNavigate } from "react-router-dom";
import { navbarHeadingLines } from "./navbarHeadings";
import { Github } from "../icons/socialIcons/Github";

export const Navbar = () => {
    const navigate = useNavigate();
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    const isLoggedIn = localStorage.getItem('token') !== null;

    const handleLogout = () => {
        // Remove token from localStorage (or sessionStorage)
        localStorage.removeItem('token');
        // Redirect user to the homepage or login page
        navigate('/');
    };

    useEffect(() => {
        if (!navbarHeadingLines[index]) return;

        let charIndex = 0;
        const currentText = navbarHeadingLines[index];

        // Set the first character immediately
        setDisplayedText(currentText.charAt(0));
        charIndex = 1;

        const interval = setInterval(() => {
            if (charIndex < currentText.length) {
                setDisplayedText((prev) => prev + currentText.charAt(charIndex));
                charIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % navbarHeadingLines.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index]);


    return (
        <div className="bg-navbarBg sticky top-0 gap-5 z-50 backdrop-blur-lg flex flex-col md:flex-row justify-between items-center px-4 py-4 md:px-16 md:py-8">
            {/* Logo Section */}
            <div
                className="cursor-pointer hover:scale-110 transition-all duration-500"
                onClick={() => navigate('/')}
            >
                <img
                    src="myPrivData_Logo.png"
                    className="w-28 text-white md:w-36 lg:w-48"
                    alt="TheShortLinkLogo"
                />
            </div>

            {/* Typing Animation Section */}
            <div className="flex flex-col items-center">
                <div className="text-white text-lg md:text-3xl cursor-pointer hover:underline decoration-emerald-400 font-extrabold text-center">
                    {displayedText}
                </div>
                <div className="flex flex-col items-center mt-3 cursor-pointer">
                    <div className="mr-1 text-white font-semibold text-center">Made by</div>
                    <div
                        onClick={() => {
                            window.open("https://shubhhere.vercel.app");
                        }}
                        className="text-blue-400 flex justify-center gap-2 hover:underline"
                    >
                        Shubhashish
                    </div>
                </div>
            </div>

            {/* Login Button */}
            <div className="flex gap-2 flex-col md:flex-row">
                {!isLoggedIn ? (
                    <Button onClick={() => navigate('login')} variant="primary" text="LogIN" startIcon={<Login />} />
                ) : (
                    <Button onClick={handleLogout} variant="other" text="LogOUT" />
                )}
                <div
                    onClick={() =>
                        window.open("https://github.com/Shubhashish-Chakraborty/StudyWithShubh")
                    }
                >
                    <Button variant="secondary" text="Github" endIcon={<Github />} />
                </div>
                {/* <div>
                    <Button text="OpenSource" onClick={() => {window.open("https://github.com/Shubhashish-Chakraborty/myprivdata")}} variant="admin" startIcon={<Github />} />
                </div>
                <div className="flex justify-center">
                    <Button text="LogIn" onClick={() => {navigate("login")}} variant="primary" startIcon={<Login />} />
                </div> */}
            </div>
        </div>
    );
};
