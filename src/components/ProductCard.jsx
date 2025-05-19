import React, { useState } from "react";

export default function ProductCard({ data }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="text-center h-auto flex flex-col justify-between border p-4 rounded shadow">
            <img
                src={data.image}
                alt={data.title}
                className="w-full h-72 object-contain transition duration-300 hover:scale-105"
                onClick={() => setShowDetails(!showDetails)}
            />
            <h3 className="mt-2 text-sm font-medium">{data.title}</h3>
            <p className="text-base font-semibold">₹{data.price * 30}</p>
            {showDetails && (
                <div className="mt-4 text-sm text-gray-600">
                    <p>Category: {data.category}</p>
                    <p>Type: {data.type}</p>
                </div>
            )}
        </div>
    );
}
