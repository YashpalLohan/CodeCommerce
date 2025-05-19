import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import ProfileCard from "./ProfileCard"; // Import the ProfileCard component

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null); // State to track the logged-in user

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set the user if logged in
        });
        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Login
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Logged in successfully!", { position: "top-right" });
            } else {
                // Signup
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success("Account created successfully!", { position: "top-right" });
            }
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast.success("Signed up with Google successfully!", { position: "top-right" });
        } catch (error) {
            toast.error(error.message, { position: "top-right" });
        }
    };

    if (user) {
        // Show the ProfileCard component if the user is logged in
        return <ProfileCard user={user} />;
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>
            <div className="text-center mt-4">
                <p>Or</p>
                <button
                    onClick={handleGoogleSignUp}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mt-2"
                >
                    Sign Up with Google
                </button>
            </div>
            <p className="text-center mt-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-500 hover:underline"
                >
                    {isLogin ? "Sign Up" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default LoginSignup;