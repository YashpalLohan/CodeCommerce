import React from "react";
import { Link } from "react-router-dom";

const productData = [
    {
        id: 1,
        name: 'Kid Tapered Slim Fit Trouser',
        price: 38,
        image: '/assets/products/p1.png'
    },
    {
        id: 2,
        name: 'Men Round Neck Pure Cotton T-shirt',
        price: 54,
        image: '/assets/products/p2.png'
    },
    {
        id: 3,
        name: 'Boy Round Neck Pure Cotton T-shirt',
        price: 60,
        image: '/assets/products/p3.png'
    },
    {
        id: 4,
        name: 'Women Zip-Front Relaxed Fit Jacket',
        price: 74,
        image: '/assets/products/p4.png'
    },
    {
        id: 5,
        name: 'Men Tapered Fit Flat-Front Trousers',
        price: 58,
        image: '/assets/products/p5.png'
    },
    {
        id: 6,
        name: 'Girls Round Neck Cotton Top',
        price: 56,
        image: '/assets/products/p6.png'
    },
    {
        id: 7,
        name: 'Women Zip-Front Relaxed Fit Jacket',
        price: 68,
        image: '/assets/products/p7.png'
    },
    {
        id: 8,
        name: 'Kid Tapered Slim Fit Trouser',
        price: 40,
        image: '/assets/products/p8.png'
    },
    {
        id: 9,
        name: 'Men Printed Plain Cotton Shirt',
        price: 52,
        image: '/assets/products/p9.png'
    },
    {
        id: 10,
        name: 'Women Zip-Front Relaxed Fit Jacket',
        price: 78,
        image: '/assets/products/p10.png'
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

const LatestCollections = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-gray-800">
                    <span className="text-gray-400">LATEST</span> COLLECTIONS
                    <span className="inline-block w-14 h-[1.45px] bg-gray-600 ml-2 align-middle"></span>
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    Discover our latest collections featuring modern designs, timeless styles, and handpicked pieces made to elevate your wardrobe.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {productData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollections;