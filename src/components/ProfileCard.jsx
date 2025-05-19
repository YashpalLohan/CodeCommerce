import React from "react";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const ProfileCard = ({ user }) => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully!", { position: "top-right" });
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Welcome, {user.displayName || user.email.split("@")[0]}!
            </h2>
            <div className="space-y-6">
                {/* Profile Picture */}
                {user.photoURL ? (
                    <div className="flex justify-center">
                        <img
                            src={user.photoURL}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <span className="text-2xl font-semibold">
                                {user.email.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    </div>
                )}

                {/* User Details */}
                <div className="text-left space-y-2">
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Name:</strong>{" "}
                        {user.displayName || "Not provided"}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Email:</strong> {user.email}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Email Verified:</strong>{" "}
                        {user.emailVerified ? "Yes" : "No"}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Phone Number:</strong>{" "}
                        {user.phoneNumber || "Not provided"}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">User ID (UID):</strong> {user.uid}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Account Created:</strong>{" "}
                        {user.metadata.creationTime
                            ? new Date(user.metadata.creationTime).toLocaleDateString()
                            : "N/A"}
                    </p>
                    <p className="text-gray-700">
                        <strong className="text-gray-800">Last Login:</strong>{" "}
                        {user.metadata.lastSignInTime
                            ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mt-6"
            >
                Logout
            </button>
        </div>
    );
};

export default ProfileCard;