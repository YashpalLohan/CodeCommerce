import React, { useState } from 'react';
const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        setEmail('');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-2xl font-medium text-gray-900">Subscribe now & get 20% off</h2>
            <p className="mt-2 text-sm text-gray-500 mb-6">
                Sign up for our newsletter and enjoy an exclusive 20% discount on your first order! Stay updated on the latest products, special offers, and more.
            </p>

            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white uppercase text-sm py-2 px-6 font-medium"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Subscribe;