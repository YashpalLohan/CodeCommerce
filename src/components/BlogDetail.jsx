import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = [
    {
        id: 1,
        title: "The Future of Fashion",
        content: "Technology is rapidly transforming the fashion industry, reshaping how clothes are designed, produced, and experienced. Smart textiles that monitor health, AI-driven trend forecasting, and 3D printing are pushing creative boundaries, while innovations like lab-grown fabrics and blockchain transparency are driving a more sustainable and ethical future. Virtual fitting rooms and digital fashion for the metaverse are redefining shopping experiences, blending style with cutting-edge tech. As these advancements continue, the future of fashion promises to be smarter, greener, and more exciting than ever before.",
        image: "https://i.pinimg.com/736x/36/0f/33/360f33a8834bc6c3989624db64ee58bd.jpg",
        author: "John Doe",
        date: "April 20, 2025",
    },
    {
        id: 2,
        title: "Sustainable Clothing",
        content: "Sustainable clothing is revolutionizing the fashion industry by offering eco-friendly alternatives that prioritize both style and the planet. Brands are increasingly embracing organic fabrics, recycled materials, and innovative techniques like 3D knitting and plant-based dyes to minimize waste and pollution. Technologies such as lab-grown leather and biodegradable textiles are pushing sustainability even further, while transparent supply chains powered by blockchain help consumers make more ethical choices. As awareness grows, sustainable fashion proves that looking good and doing good can go hand in hand.",
        image: "https://i.pinimg.com/736x/b9/96/71/b99671b809e30a2ee35d4ed3901e6c7b.jpg",
        author: "Jane Smith",
        date: "April 15, 2025",
    },
    {
        id: 3,
        title: "Top Trends of 2025",
        content: "The fashion industry in 2025 is all about bold innovation, with trends driven by sustainability, technology, and individuality. Eco-conscious designs using recycled and bio-based materials are dominating the runways, while digital fashion and virtual try-ons are reshaping the shopping experience. Gender-fluid styles, vibrant colors, and nostalgic Y2K influences are making a major comeback, alongside a growing demand for personalized, AI-curated wardrobes. This year, fashion is not just about what you wear — it's about how it’s made, experienced, and expressed.",
        image: "https://i.pinimg.com/736x/29/b4/93/29b493f4e5f422f2676cce79aef7c5f4.jpg",
        author: "Emily Johnson",
        date: "April 10, 2025",
    },
];

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <div className="text-center py-12">Blog post not found.</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12">
            <div className="mb-8">
                <Link to="/blog" className="text-blue-600 hover:underline">
                    ← Back to Blog
                </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[30rem] object-cover"
                />
                <div className="p-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{blog.title}</h1>
                    <p className="text-sm text-gray-500 mt-2">{blog.date} | By {blog.author}</p>
                    <p className="text-gray-700 mt-6 leading-relaxed">{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;