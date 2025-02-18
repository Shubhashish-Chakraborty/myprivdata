import { ReactElement } from "react";

const variantStyle = {
    primary : "bg-primaryBtnBg text-white font-bold hover:bg-blue-900",
    secondary: "bg-blue-800 border border-blue-500 text-white font-bold",
    secondary2: "bg-blue-500 border border-blue-500 text-white font-bold",
    secondary3: "bg-emerald-700 border border-blue-500 text-white font-bold",
    other: "bg-red-700 border border-black text-white font-bold",
    notAllowed: "bg-red-500 border border-black text-white font-bold cursor-not-allowed",
    admin: "bg-purple-700 border border-black text-white font-bold cursor-grabbing"
}


const defaultStyles = "flex items-center px-4 py-2 cursor-pointer rounded-md transition-all duration-500 hover:-translate-y-2";

export const Button = ({variant , text , startIcon , endIcon , onClick}: {
    variant: "primary" | "secondary" | "secondary2" |  "secondary3" | "other" | "notAllowed" | "admin";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`${variantStyle[variant]} ${defaultStyles}`}
            >
                {startIcon && <div className="mr-2">
                    {startIcon}
                </div> }
                {text} 
                
                {endIcon && <div className="ml-2">
                    {endIcon}
                </div>}
            </button>
        </>
    )
}