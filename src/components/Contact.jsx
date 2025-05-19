import React from "react";

const Contact = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12 text-gray-800">
            <h1 className="text-center text-2xl md:text-3xl font-semibold mb-10">
                <span className="text-black font-bold">Contact </span>
                <span className="font-bold text-gray-900">Us</span>
                <hr className="w-16 mx-auto border-b-2 border-black mt-2" />
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="w-full md:w-1/2">
                    <img src="./assets/contact.png" alt="Contact" className="w-full h-auto object-cover" />
                </div>

                <div className="w-full md:w-1/2 space-y-5">
                    <div>
                        <h3 className="font-semibold text-lg">Our Store</h3>
                        <p>110001 New Delhi</p>
                        <p>Suite 350, , India</p>
                        <p className="mt-2">Tel: +91-720-620-0000</p>
                        <p>Email: yashpal.2024@nst.rishihood.edu.in</p>
                    </div>

                    <div className="pt-6">
                        <h3 className="font-semibold text-lg">Careers at Forever</h3>
                        <p>Learn more about our teams and job openings.</p>
                        <button className="mt-3 px-5 py-2 border border-black hover:bg-black hover:text-white transition duration-200">
                            Explore Jobs
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;