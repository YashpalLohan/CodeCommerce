import React from "react";
import { Link } from "react-router-dom";

const blogData = [
    {
        id: 1,
        title: "The Future of Fashion",
        snippet: "Discover how technology is shaping the future of fashion.",
        image: "https://i.pinimg.com/736x/36/0f/33/360f33a8834bc6c3989624db64ee58bd.jpg",
        author: "John Doe",
        date: "April 20, 2025",
        content: "Full content of 'The Future of Fashion' blog post...",
    },
    {
        id: 2,
        title: "Sustainable Clothing",
        snippet: "Learn about eco-friendly clothing options.",
        image: "https://i.pinimg.com/736x/b9/96/71/b99671b809e30a2ee35d4ed3901e6c7b.jpg",
        // image: "/assets/blog/blog2.jpg",
        author: "Jane Smith",
        date: "April 15, 2025",
        content: "Full content of 'Sustainable Clothing' blog post...",
    },
    {
        id: 3,
        title: "Top Trends of 2025",
        snippet: "Explore the latest trends in the fashion industry.",
        image: "https://i.pinimg.com/736x/29/b4/93/29b493f4e5f422f2676cce79aef7c5f4.jpg",
        author: "Emily Johnson",
        date: "April 10, 2025",
        content: "Full content of 'Top Trends of 2025' blog post...",
    },
];

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    <span className="text-black font-bold">Our </span>
                    <span className="font-bold text-gray-900">Blog</span>
                </h1>
                <hr className="w-16 mx-auto border-b-2 border-black mt-4" />
                <p className="text-gray-600 mt-4 text-base md:text-lg">
                    Stay updated with the latest trends, insights, and stories from the fashion world.
                </p>
                <img
                    src="https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?ct=jpeg" // Replace with your image path
                    alt="Blog Header"
                    className="w-full h-64 object-cover rounded-lg mb-6 mt-6"
                />
                <hr className="w-full mx-auto border-b-2 border-black mt-4" />

            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        {/* Blog Image */}
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-56 object-cover"
                        />
                        {/* Blog Content */}
                        <div className="p-6">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{blog.title}</h3>
                            <p className="text-sm text-gray-500 mt-2">{blog.date} | By {blog.author}</p>
                            <p className="text-gray-600 mt-4">{blog.snippet}</p>
                            <Link
                                to={`/blog/${blog.id}`}
                                className="mt-6 inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;