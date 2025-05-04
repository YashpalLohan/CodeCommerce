import React from "react";
import { Link } from "react-router-dom";

const bestSellersData = [
    {
        id: 11,
        name: "Men Slim Fit Relaxed Denim Jacket",
        price: 79,
        image: "/assets/collection/c11.png",
    },
    {
        id: 12,
        name: "Women Zip-Front Relaxed Fit Jacket",
        price: 82,
        image: "/assets/collection/c12.png",
    },
    {
        id: 13,
        name: "Boy Round Neck Pure Cotton T-shirt",
        price: 30,
        image: "/assets/collection/c13.png",
    },
    {
        id: 14,
        name: "Men Round Neck Pure Cotton T-shirt",
        price: 26,
        image: "/assets/collection/c14.png",
    },
    {
        id: 15,
        name: "Women Round Neck Cotton Top",
        price: 40,
        image: "/assets/collection/c15.png",
    }
];

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white">
            <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition duration-300 hover:scale-105"
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="text-sm font-medium text-gray-900">₹{product.price * 30}</p>
                </div>
            </Link>
        </div>
    );
};

const BestSellers = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-gray-800">
                    <span className="text-gray-400">BEST</span> SELLERS
                    <span className="inline-block w-14 h-[1.45px] bg-gray-600 ml-2 align-middle"></span>
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    Explore our most popular items loved by customers — top-rated styles that combine quality, comfort, and trendsetting design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {bestSellersData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;