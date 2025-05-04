import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/collection", { state: { focusSearch: true } });
    };

    return (
        <header className="w-full shadow-md">
            <div className="bg-white px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">CodeCommerce<span className="text-pink-600">.</span></Link>
                </div>

                {/* Navigation */}
                <nav className="px-4 py-3">
                    <ul className="flex flex-wrap gap-6 justify-center text-sm font-medium">
                        <li>
                            <Link to="/" className="hover:text-blue-500 transition duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/collection" className="hover:text-blue-500 transition duration-200">Collection</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-blue-500 transition duration-200">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-500 transition duration-200">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex space-x-6 items-center mt-4 md:mt-0">
                    <button onClick={handleSearchClick} className="hover:text-blue-500">
                        <FiSearch size={22} />
                    </button>
                    <Link to="/cart" className="hover:text-blue-500">
                        <FiShoppingCart size={22} />
                    </Link>
                    {user ? (
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-800">
                                {user.displayName || "User"}
                            </span>
                            <Link to="/login" className="hover:text-gray-600">
                                <FiUser size={22} />
                            </Link>
                        </div>
                    ) : (
                        <Link to="/login" className="hover:text-gray-600 flex items-center gap-2">
                            <FiUser size={22} />
                            <span className="text-sm font-medium">Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}