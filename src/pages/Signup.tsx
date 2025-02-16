import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../icons/others/Redirect";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const SignupPage = () => {
    const navigate = useNavigate();

    // References for input fields
    const fullNameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const contactNumberRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // State for error and success messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Function to handle form submission
    // const handleSignup = async () => {
    //     setError("");
    //     setSuccess("");

    //     const fullName = fullNameRef.current?.value;
    //     const username = usernameRef.current?.value;
    //     const contactNumber = contactNumberRef.current?.value;
    //     const password = passwordRef.current?.value;

    //     // Basic validation
    //     if (!fullName || !username || !contactNumber || !password) {
    //         setError("All fields are required.");
    //         return;
    //     }

    //     try {
    //         // API request to the backend
    //         const response = await axios.post(`${BACKEND_URL}/api/auth/user/signup`, {
    //             fullName,
    //             username,
    //             contactNumber,
    //             password,
    //         });

    //         if (response.status === 201) {
    //             setSuccess("Account created successfully!");
    //             setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    //         } else {
    //             setError("Something went wrong. Please try again.");
    //         }
    //     } catch (err:any) {
    //         setError(err.response?.data?.message || "An error occurred.");
    //     }
    // };

    const handleSignup = async () => {
        setError("");
        setSuccess("");

        const fullName = fullNameRef.current?.value;
        const username = usernameRef.current?.value;
        const contactNumber = contactNumberRef.current?.value ? Number(contactNumberRef.current.value) : null;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        // Basic validation
        if (!fullName || !username || !contactNumber || !email || !password) {
            setError("All fields are required.");
            return;
        }

        if (isNaN(contactNumber)) {
            setError("Contact number must be a valid number.");
            return;
        }

        try {
            // API request to the backend
            const response = await axios.post(`${BACKEND_URL}/api/auth/user/signup`, {
                fullName,
                username,
                contactNumber,
                email,
                password,
            });

            if (response.status === 201) {
                setSuccess("Account created successfully!");
                setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred.");
        }
    };



    return (
        <div className="my-12 flex items-center justify-center bg-custom-1 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md sm:w-96 md:w-80 lg:w-96 xl:w-96">
                {/* Header */}
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Register to MyPrivData
                </h1>

                {/* Input Fields */}
                <div className="space-y-4">
                    <Input ref={fullNameRef} type="text" placeholder="Enter Fullname" />
                    <Input ref={usernameRef} type="text" placeholder="Enter Username" />
                    <Input ref={contactNumberRef} type="number" placeholder="Enter Contact Number" />
                    <Input ref={emailRef} type="email" placeholder="Enter Email" />
                    <Input ref={passwordRef} type="password" placeholder="Enter password" />
                </div>

                {/* Error and Success Messages */}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                {success && <p className="text-green-500 text-center mt-4">{success}</p>}

                {/* Sign-Up Button */}
                <div className="flex justify-center mt-6">
                    <Button
                        text="Sign Up"
                        variant="primary"
                        endIcon={<Redirect />}
                        onClick={handleSignup}
                    />
                </div>

                {/* Login Section */}
                <p className="text-white text-center mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-400 font-bold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};