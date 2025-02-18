import { DashboardCard } from "../components/DashboardCard";
import { useEffect, useState } from "react";
import { AddGmailModal } from "../components/modals/Gmail/AddGmailModal";
import { UpdateGmailModal } from "../components/modals/Gmail/UpdateGmailModal";
import { DeleteGmailModal } from "../components/modals/Gmail/DeleteGmailModal";
import { SearchGmailModal } from "../components/modals/Gmail/SearchGmailModal";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Dashboard = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<any>(null);
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
            } catch (error: any) {
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
        <div>
            {loading ? (
                <div className="text-white text-center text-xl">Loading...</div>
            ) : (
                <div className="text-white font-extrabold text-center text-2xl md:text-4xl">
                    Welcome {welcomeName}!
                    <div className="text-cyan-300 animate-bounce text-2xl font-bold hover:text-emerald-300 cursor-pointer transition-all duration-500">
                        Manage Your Accounts!!
                    </div>
                    <div className="text-xl md:text-3xl font-bold cursor-pointer rounded-4xl hover:scale-105 transition-all duration-500 bg-black p-2 text-red-500 md:fixed">
                        Website is Under Development!
                    </div>
                </div>
            )}
            <div className="flex flex-wrap flex-col md:flex-row justify-center">
                <DashboardCard
                    title="Gmail Accounts"
                    thumbnail="gmailLogo1.jpg"
                    onAdd={() => setShowAddModal(true)}
                    onUpdate={() => {
                        setSelectedAccount({ _id: "exampleId", email: "example@gmail.com", password: "password", description: "Example" });
                        setShowUpdateModal(true);
                    }}
                    onDelete={() => {
                        setSelectedAccount("exampleId");
                        setShowDeleteModal(true);
                    }}
                    onSearch={() => setShowSearchModal(true)}
                />
                {/* <DashboardCard
                    title="Social Media Accounts"
                    thumbnail="socialLogo1.jpg"
                />
                <DashboardCard
                    title="Other Accounts"
                    thumbnail="otherLogo1.jpg"
                /> */}
            </div>

            {showAddModal && (
                <AddGmailModal
                    onClose={() => setShowAddModal(false)}
                    onAdd={() => {
                        // Refresh the list of Gmail accounts
                        setShowAddModal(false);
                    }}
                />
            )}

            {showUpdateModal && selectedAccount && (
                <UpdateGmailModal
                    onClose={() => setShowUpdateModal(false)}
                    onUpdate={() => {
                        // Refresh the list of Gmail accounts
                        setShowUpdateModal(false);
                    }}
                    account={selectedAccount}
                />
            )}

            {showDeleteModal && selectedAccount && (
                <DeleteGmailModal
                    onClose={() => setShowDeleteModal(false)}
                    onDelete={() => {
                        // Refresh the list of Gmail accounts
                        setShowDeleteModal(false);
                    }}
                    accountId={selectedAccount}
                />
            )}

            {showSearchModal && (
                <SearchGmailModal
                    onClose={() => setShowSearchModal(false)}
                />
            )}
        </div>
    );
};