import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
    return (
        <header className="w-full shadow-md mx-auto max-w-screen-xl">
            {/* Main Header */}
            <div className="bg-white px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">CodeCommerce<span className="text-pink-600">.</span></div>

                {/* Navigation */}
                <nav className="px-4 py-3">
                    <ul className="flex flex-wrap gap-6 justify-center text-sm font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Collection</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex space-x-6 items-center mt-4 md:mt-0">
                    <button className="relative hover:text-blue-500">
                        <FiSearch size={22} />
                    </button>
                    <button className="relative hover:text-blue-500">
                        <FiShoppingCart size={22} />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                            0
                        </span>
                    </button>
                    <button className="hover:text-gray-600">
                        <FiUser size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
}
