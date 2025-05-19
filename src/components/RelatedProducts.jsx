import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ relatedProducts }) => {
    return (
        <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">
                RELATED <span className="text-black font-bold">PRODUCTS</span>
                <hr className="mt-2 w-24 border-t-2 border-black" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {relatedProducts.map((product) => (
                    <div key={product.id} className="bg-white text-center">
                        <Link to={`/product/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover transition duration-300 hover:scale-105"
                            />
                            <h4 className="mt-2 text-sm font-medium">{product.title}</h4>
                            <p className="text-sm font-semibold">₹{product.price * 30}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;