import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

interface DeleteGmailModalProps {
    onClose: () => void;
    onDelete: () => void; // Callback to refresh the list after deleting
    accountId: string;
}

export const DeleteGmailModal = ({ onClose, onDelete, accountId }: DeleteGmailModalProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleDelete = async () => {
        setLoading(true);
        setError("");

        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${BACKEND_URL}/api/gmail/delete/${accountId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            onDelete(); // Refresh the list
            onClose(); // Close the modal
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to delete Gmail account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Delete Gmail Account</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <p className="mb-4">Are you sure you want to delete this Gmail account?</p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};