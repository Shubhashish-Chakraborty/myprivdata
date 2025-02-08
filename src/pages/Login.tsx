import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Login } from "../icons/NavbarIcons/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const LoginPage = () => {
    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        setError("");
        setMessage("");

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            setError("Both email and password are required.");
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/user/signin`, {
                username,
                password,
            });

            const { token } = response.data;

            // Store token in localStorage
            localStorage.setItem("token", token);
            navigate(`/dashboard`);

        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="my-12 bg-custom-1 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md sm:w-96 md:w-80 lg:w-96 xl:w-96">
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Login to Your Account
                </h1>

                <div className="space-y-4">
                    <Input type="text" placeholder="Enter Username" ref={usernameRef} />
                    <Input type="password" placeholder="Enter password" ref={passwordRef} />

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    {message && <p className="text-yellow-500 text-center mt-4">{message}</p>}

                    <div className="flex justify-center">
                        <Button
                            text="Login"
                            variant="primary"
                            endIcon={<Login />}
                            onClick={handleLogin}
                        />
                    </div>
                </div>

                <p className="text-white text-center mt-6">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => {
                            navigate("/signup");
                        }}
                        className="text-blue-400 font-bold cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
                
            </div>
        </div>
    );
};