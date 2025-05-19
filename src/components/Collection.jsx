import React, { useState } from "react";
import { Link } from "react-router-dom";


const productList = [
    {
        id: 1,
        title: "Kid Tapered Slim Fit Trouser",
        price: 38,
        category: "Kids",
        type: "Bottomwear",
        image: "/assets/collection/c1.png",
    },
    {
        id: 2,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 64,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c2.png",
    },
    {
        id: 3,
        title: "Boy Round Neck Pure Cotton T-shirt",
        price: 60,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c3.png",
    },
    {
        id: 4,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 74,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c4.png",
    },
    {
        id: 5,
        title: "Men Tapered Fit Flat-Front Trousers",
        price: 58,
        category: "Men",
        type: "Bottomwear",
        image: "/assets/collection/c5.png",
    },
    {
        id: 6,
        title: "Girls Round Neck Cotton Top",
        price: 56,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c6.png",
    },
    {
        id: 7,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 68,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c7.png",
    },
    {
        id: 8,
        title: "Kid Tapered Slim Fit Trouser",
        price: 40,
        category: "Kids",
        type: "Bottomwear",
        image: "/assets/collection/c8.png",
    },
    {
        id: 9,
        title: "Men Printed Plain Cotton Shirt",
        price: 32,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c9.png",
    },
    {
        id: 10,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 78,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c10.png",
    },
    {
        id: 11,
        title: "Men Slim Fit Relaxed Denim Jacket",
        price: 79,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c11.png",
    },
    {
        id: 12,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 82,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c12.png",
    },
    {
        id: 13,
        title: "Boy Round Neck Pure Cotton T-shirt",
        price: 30,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c13.png",
    },
    {
        id: 14,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 26,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c14.png",
    },
    {
        id: 15,
        title: "Women Round Neck Cotton Top",
        price: 40,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c15.png",
    },
    {
        id: 16,
        title: "Girls Round Neck Cotton Top",
        price: 38,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c16.png",
    },
    {
        id: 17,
        title: "Men Slim Fit Relaxed Denim Jacket",
        price: 72,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c17.png",
    },
    {
        id: 18,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 82,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c18.png",
    },
    {
        id: 19,
        title: "Men Tapered Fit Flat-Front Trousers",
        price: 63,
        category: "Men",
        type: "Bottomwear",
        image: "/assets/collection/c19.png",
    },
    {
        id: 20,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 26,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c20.png",
    },
    {
        id: 21,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 68,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c21.png",
    },
    {
        id: 22,
        title: "Boy Round Neck Pure Cotton T-shirt",
        price: 28,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c22.png",
    },
    {
        id: 23,
        title: "Women Round Neck Cotton Top",
        price: 38,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c23.png",
    },
    {
        id: 24,
        title: "Men Slim Fit Relaxed Denim Jacket",
        price: 50,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c24.png",
    },
    {
        id: 25,
        title: "Kid Tapered Slim Fit Trouser",
        price: 60,
        category: "Kids",
        type: "Bottomwear",
        image: "/assets/collection/c25.png",
    },
    {
        id: 26,
        title: "Women Round Neck Cotton Top",
        price: 42,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c26.png",
    },
    {
        id: 27,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 34,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c27.png",
    },
    {
        id: 28,
        title: "Girls Round Neck Cotton Top",
        price: 40,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c28.png",
    },
    {
        id: 29,
        title: "Women Round Neck Cotton Top",
        price: 45,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c29.png",
    },
    {
        id: 30,
        title: "Women Palazzo Pants with Waist Belt",
        price: 67,
        category: "Women",
        type: "Bottomwear",
        image: "/assets/collection/c30.png",
    },
    {
        id: 31,
        title: "Girls Round Neck Cotton Top",
        price: 50,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c31.png",
    },
    {
        id: 32,
        title: "Men Slim Fit Relaxed Denim Jacket",
        price: 84,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c32.png",
    },
    {
        id: 33,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 48,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c33.png",
    },
    {
        id: 34,
        title: "Women Zip-Front Relaxed Fit Jacket",
        price: 78,
        category: "Women",
        type: "Winterwear",
        image: "/assets/collection/c34.png",
    },
    {
        id: 35,
        title: "Girls Round Neck Cotton Top",
        price: 48,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c35.png",
    },
    {
        id: 36,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 46,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c36.png",
    },
    {
        id: 37,
        title: "Girls Round Neck Cotton Top",
        price: 42,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c37.png",
    },
    {
        id: 38,
        title: "Boy Round Neck Pure Cotton T-shirt",
        price: 36,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c38.png",
    },
    {
        id: 39,
        title: "Girls Round Neck Cotton Top",
        price: 60,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c39.png",
    },
    {
        id: 40,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 44,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c40.png",
    },
    {
        id: 41,
        title: "Fortight Fusillage Plains with Young Drift",
        price: 52,
        category: "Men",
        type: "Bottomwear",
        image: "/assets/collection/c41.png",
    },
    {
        id: 42,
        title: "ORTS Rounds Thick & Output Taby",
        price: 64,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c42.png",
    },
    {
        id: 43,
        title: "Boy Rounds Thick Play & Output T-shirt",
        price: 25,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c43.png",
    },
    {
        id: 44,
        title: "From Shirt Fit Program Layerfit Jacket",
        price: 77,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c44.png",
    },
    {
        id: 45,
        title: "Boy Round Neck Pure Cotton T-shirt",
        price: 26,
        category: "Kids",
        type: "Topwear",
        image: "/assets/collection/c45.png",
    },
    {
        id: 46,
        title: "Kid Tapered Slim Fit Trouser",
        price: 56,
        category: "Kids",
        type: "Bottomwear",
        image: "/assets/collection/c46.png",
    },
    {
        id: 47,
        title: "Men Slim Fit Relaxed Denim Jacket",
        price: 86,
        category: "Men",
        type: "Winterwear",
        image: "/assets/collection/c47.png",
    },
    {
        id: 48,
        title: "Men Tapered Fit Flat-Front Trousers",
        price: 70,
        category: "Men",
        type: "Bottomwear",
        image: "/assets/collection/c48.png",
    },
    {
        id: 49,
        title: "Women Round Neck Cotton Top",
        price: 30,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c49.png",
    },
    {
        id: 50,
        title: "Women Round Neck Cotton Top",
        price: 36,
        category: "Women",
        type: "Topwear",
        image: "/assets/collection/c50.png",
    },
    {
        id: 51,
        title: "Men Tapered Fit Flat-Front Trousers",
        price: 72,
        category: "Men",
        type: "Bottomwear",
        image: "/assets/collection/c51.png",
    },
    {
        id: 52,
        title: "Men Round Neck Pure Cotton T-shirt",
        price: 80,
        category: "Men",
        type: "Topwear",
        image: "/assets/collection/c52.png",
    },
];


const categories = ["Men", "Women", "Kids"];
const types = ["Topwear", "Bottomwear", "Winterwear"];

export default function Collection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortOption, setSortOption] = useState("relevant");

    const handleCategoryChange = (cat) => {
        setSelectedCategories((prev) =>
            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
        );
    };

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleSort = (a, b) => {
        if (sortOption === "lowToHigh") return a.price - b.price;
        if (sortOption === "highToLow") return b.price - a.price;
        return 0; // Relevant (default)
    };

    const filteredProducts = productList
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
            selectedCategories.length
                ? selectedCategories.includes(product.category)
                : true
        )
        .filter((product) =>
            selectedTypes.length ? selectedTypes.includes(product.type) : true
        )
        .sort(handleSort);

    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-4 md:mb-0">
                    <span className="text-black font-bold">Our Collection</span>
                    <hr className="w-16 border-b-2 border-black mt-2 mx-auto md:mx-0" />
                </h1>
                {/* Search box */}
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-3 border rounded-full shadow-sm outline-none"
                />
            </div>

            {/* Filters and Sorting */}
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-6">
                {/* Filters */}
                <div className="flex gap-10 flex-wrap">
                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold mb-2">CATEGORIES</h3>
                        {categories.map((cat) => (
                            <label key={cat} className="block">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => handleCategoryChange(cat)}
                                    className="mr-2"
                                />
                                {cat}
                            </label>
                        ))}
                    </div>

                    {/* Types */}
                    <div>
                        <h3 className="font-semibold mb-2">TYPE</h3>
                        {types.map((type) => (
                            <label key={type} className="block">
                                <input
                                    type="checkbox"
                                    checked={selectedTypes.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                    className="mr-2"
                                />
                                {type}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sort */}
                <div>
                    <select
                        className="border px-3 py-2 rounded"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="bg-white text-center border p-4 rounded shadow hover:shadow-lg transition"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                            <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
                            <p className="text-base font-semibold">₹{item.price * 30}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center mt-10 text-gray-600">No products found.</p>
            )}
        </div>
    );
}
