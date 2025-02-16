import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [welcomeName, setWelcomeName] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/auth/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,  // 🔥 FIX: Ensure correct format
                    },
                });

                setWelcomeName(response.data.fullName);
            } catch (error:any) {
                console.error("Error fetching user data:", error.response?.data || error);

                // 🔥 FIX: Handle Unauthorized or Invalid Token Errors
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    return (
        <>
            {loading ? (
                <div className="text-white text-center text-xl">Loading...</div>
            ) : (
                <div className="text-white font-extrabold text-center text-2xl md:text-4xl">
                    Welcome {welcomeName}!
                </div>
            )}

            <div className="mt-10 text-center text-xl md:text-3xl text-green-400 bg-gray-900 font-bold shadow-emerald-200 shadow-md">
                Thanks for Registering <br/>
                Website is Under Development, Soon You will be Notified <br/>
                When it is Ready!!
            </div>
        </>
    );
};
