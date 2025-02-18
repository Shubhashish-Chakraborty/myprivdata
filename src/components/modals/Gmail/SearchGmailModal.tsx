import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

interface SearchGmailModalProps {
    onClose: () => void;
}

export const SearchGmailModal = ({ onClose }: SearchGmailModalProps) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]); // Store search results

    const handleSearch = async () => {
        if (!email) {
            setError("Email is required");
            return;
        }

        setLoading(true);
        setError("");
        setSearchResults([]); // Clear previous results

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${BACKEND_URL}/api/data/gmail/search`, 
                { email }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSearchResults(response.data.gmailAccounts); // Store results in state
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to search Gmail accounts");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Search Gmail Account</h2>
                {error && <p className="text-green-400 font-bold mb-4">{error}</p>}
                
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded mr-2"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>

                {/* Search Results Section */}
                {searchResults.length > 0 && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Results:</h3>
                        <ul className="max-h-40 overflow-y-auto">
                            {searchResults.map((account, index) => (
                                <li key={index} className="p-2 border-b last:border-b-0">
                                    <span className="font-medium">{account.email}</span> - {account.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
