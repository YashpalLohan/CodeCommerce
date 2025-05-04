import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center">
                            <h2 className="text-2xl font-bold text-gray-900">CodeCommerce<span className="text-pink-500">.</span></h2>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            CodeCommerce is your one-stop shop for the latest and greatest in online shopping. We bring you a curated selection of high-quality products, ensuring a seamless and enjoyable shopping experience. Trusted by customers worldwide for over a decade.

                        </p>
                    </div>

                    <div className="md:ml-auto md:col-span-1">
                        <h3 className="text-lg font-medium text-gray-900">COMPANY</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/" className="text-sm text-gray-500 hover:text-gray-900">Home</a></li>
                            <li><a href="/about" className="text-sm text-gray-500 hover:text-gray-900">About us</a></li>
                            <li><a href="/collection" className="text-sm text-gray-500 hover:text-gray-900">Delivery</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-gray-900">GET IN TOUCH</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="text-sm text-gray-500">+91-720-620-0000</li>
                            <li className="text-sm text-gray-500">yashpal.2024@nst.rishihood.edu.in</li>
                            <li className="text-sm text-gray-500">Instagram</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        ©  {new Date().getFullYear()} Yashpal Lohan - All Right Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;