import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [welcomeName , setWelcomeName] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/auth/user/me`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                // console.log(response.data.fullName);
                setWelcomeName(response.data.fullName);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login page if not logged in
            return;
        }

    } , [])
    

    return (
        <>
            <div className="text-white font-extrabold text-center text-2xl md:text-4xl">
                Welcome {welcomeName}!
            </div>
            <div className="mt-10 text-center text-xl md:text-3xl text-green-400 bg-gray-900 font-bold shadow-emerald-200 shadow-md">
                Thanks for Registering <br/>
                Website is Under Development, Soon You will be Notified <br/>
                When it is Ready!!
            </div>
        </>
    )

};
