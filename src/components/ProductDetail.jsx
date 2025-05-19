// This file is of collection of product cards that are displayed on the home page.

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "./ProductContext";
import { useCart } from "./CartContext";
import RelatedProducts from "./RelatedProducts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
    const { id } = useParams();
    const products = useProducts();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) return <div className="p-10 text-center">Product not found</div>;

    // Filter related products
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 10);

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size before adding to cart.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        addToCart(product, selectedSize);
        toast.success("Product added to cart!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="flex flex-col px-4 py-8 max-w-7xl mx-auto gap-12">
            {/* Product Details */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Section */}
                <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full max-w-md object-contain"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold">{product.title}</h2>
                        <div className="flex items-center gap-2 text-sm mt-1">
                            <span className="text-red-500">★★★★★</span>
                            <span>(122)</span>
                        </div>
                    </div>

                    <div className="text-2xl font-semibold">₹{product.price * 30}</div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        A lightweight, usually knitted, pullover shirt...
                    </p>

                    <div>
                        <h4 className="text-sm font-semibold mb-2">Select Size</h4>
                        <div className="flex gap-3">
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none ${
                                        selectedSize === size ? "bg-gray-400" : ""
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-black text-white px-6 py-3 mt-4 hover:bg-gray-800 transition"
                    >
                        ADD TO CART
                    </button>

                    <div className="text-sm text-gray-600 space-y-1 mt-4">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available.</p>
                        <p>7-day return and exchange policy.</p>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <RelatedProducts relatedProducts={relatedProducts} />
        </div>
    );
};

export default ProductDetail;
