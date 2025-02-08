import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";

export default function App() {

    return (
        <div className="min-h-screen bg-mainBg flex flex-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignupPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}