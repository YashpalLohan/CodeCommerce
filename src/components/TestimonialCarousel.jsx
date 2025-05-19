import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Aarav Sharma",
        position: "Entrepreneur",
        quote: "CodeCommerce is my go-to for premium fashion. The fabric quality are exceptional!",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        position: "Fashion Blogger",
        quote: "Their seasonal collections are always on point! Trendy styles at very reasonable prices.",
        rating: 4,
    },
    {
        name: "Rohit Verma",
        position: "Tech Enthusiast",
        quote: "Perfect blend of comfort and style. I've bought multiple casual wears that look great!",
        rating: 5,
    },
    {
        name: "Neha Rajput",
        position: "Lifestyle Influencer",
        quote: "The ethnic wear collection is stunning! Got so many compliments on my last purchase.",
        rating: 5,
    },
    {
        name: "Karan Malhotra",
        position: "Product Manager at Flipkart",
        quote: "Excellent fabric selection and true-to-size fits. My wardrobe is now 80% CodeCommerce!",
        rating: 4,
    },
    {
        name: "Ishita Kapoor",
        position: "Marketing Executive",
        quote: "The premium packaging makes unboxing luxurious. Clothes arrive in perfect condition.",
        rating: 5,
    },
    {
        name: "Vikram Iyer",
        position: "Software Engineer at TCS",
        quote: "Their formal shirts are my office staple. Comfortable for long hours and always stylish.",
        rating: 5,
    },
    {
        name: "Tanvi Deshmukh",
        position: "Small Business Owner",
        quote: "I source fabrics from CodeCommerce for my boutique. Consistent quality every single time!",
        rating: 5,
    },
];

const TestimonialCarousel = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
                <hr className="w-16 mx-auto border-b-2 border-black mb-10" />

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    navigation
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white h-full p-6 rounded shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between text-left">
                                <div className="mb-6">
                                    <p className="text-gray-600 italic text-sm md:text-base">"{item.quote}"</p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex mb-1 text-yellow-500">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.position}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialCarousel;