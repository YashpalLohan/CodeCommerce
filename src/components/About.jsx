export default function About() {
    return (
        <div className="px-10 py-10 max-w-screen-xl mx-auto">
            <h1 className="text-center text-2xl md:text-3xl font-semibold mb-10">
                <span className="text-black font-bold">About </span>
                <span className="font-bold text-gray-900">Us</span>
                <hr className="w-16 mx-auto border-b-2 border-black mt-2" />
            </h1>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <img
                    src="/assets/about.png"
                    alt="About"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                />

                <div className="text-gray-700 space-y-4">
                    <p>
                        CodeCommerce was born out of a passion for innovation and a desire to revolutionize the way people shop online.
                        Our journey began with a simple idea: to provide a platform where customers can easily discover, explore,
                        and purchase a wide range of products from the comfort of their homes.
                    </p>
                    <p>
                        Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater
                        to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive
                        collection sourced from trusted brands and suppliers.
                    </p>
                    <p className="font-semibold text-black">Our Mission</p>
                    <p>
                        Our mission at CodeCommerce is to empower customers with choice, convenience, and confidence. We're dedicated to
                        providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and
                        beyond.
                    </p>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-xl font-semibold mb-6">
                    WHY <span className="text-black font-bold">CHOOSE US</span> <hr className="mt-2 w-24 border-t-2 border-black" />
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                    <div className="p-6 border rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Quality Assurance:</h3>
                        <p>
                            We meticulously select and vet each product to ensure it meets our stringent quality standards.
                        </p>
                    </div>
                    <div className="p-6 border rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Convenience:</h3>
                        <p>
                            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
                        </p>
                    </div>
                    <div className="p-6 border rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Exceptional Customer Service:</h3>
                        <p>
                            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
