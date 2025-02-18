import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

interface UpdateGmailModalProps {
    onClose: () => void;
    onUpdate: () => void; // Callback to refresh the list after updating
    account: { _id: string; email: string; password: string; description: string };
}

export const UpdateGmailModal = ({ onClose, onUpdate, account }: UpdateGmailModalProps) => {
    const [email, setEmail] = useState(account.email);
    const [password, setPassword] = useState(account.password);
    const [description, setDescription] = useState(account.description);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `${BACKEND_URL}/api/data/gmail/update/${account._id}`,
                { email, password, description },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            onUpdate(); // Refresh the list
            onClose(); // Close the modal
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to update Gmail account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Update Gmail Account</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {loading ? "Updating..." : "Update"}
                    </button>
                </div>
            </div>
        </div>
    );
};